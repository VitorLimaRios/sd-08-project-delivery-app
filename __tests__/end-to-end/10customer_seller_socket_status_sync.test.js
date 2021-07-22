const requirement = global.__REQUIREMENTS__;
const action = require("./actions");
const { showCurrentCart, showCurrentOrderInfo } = require("./actions/customer");

const updateStatus = require("./actions/common/updateStatus");

let sellerPage = {};
let sellerContext = {};
let itemList = [];
let currentOrder = {};

beforeEach(async () => {
  itemList = action.customer.getRandomProducts();
  showCurrentCart(itemList, global.__TESTDESC__);

  const newOrder = action.customer.newOrder(itemList);

  expect(
    (await action.common.navigate.login.default(page, "customer")) &&
      (await action.customer.validateProductsTotalPrice(page, itemList)) &&
      (await action.common.navigate.customer.checkout.default(page))
  ).toBeTruthy();

  const { saleId, saleDate } = await action.customer.checkoutNewSale(
    page,
    newOrder
  );
  expect(typeof saleId).toBe("number");

  currentOrder = {
    saleId,
    ...newOrder,
    saleDate,
  };

  showCurrentOrderInfo(currentOrder, global.__TESTDESC__);

  sellerContext = await browser.createIncognitoBrowserContext();
  sellerPage = await sellerContext.newPage();

  expect(
    (await action.common.navigate.login.default(sellerPage, "seller")) &&
      (await action.common.navigate.seller.orderDetails.default(
        sellerPage,
        saleId
      ))
  ).toBeTruthy();
});

afterEach(async () => {
  sellerPage && await sellerPage.removeAllListeners() && await sellerPage.close()
  sellerContext && await sellerContext.close();
  sellerPage = undefined;
  sellerContext = undefined;
});

describe(requirement(36), () => {
  test("O avaliador verificará se, ao alterar o status do pedido na tela da pessoa vendedora, o mesmo também é alterado na tela de detalhes do pedido do cliente", async () => {
    expect(await updateStatus({ situation: 1, COD: page, SOD: sellerPage, realTime: true })).toBeTruthy()
  });
});

describe(requirement(37), () => {
  test("O avaliador verificará se, ao alterar o status do pedido na tela da pessoa vendedora, o mesmo também é alterado na tela de pedidos do cliente", async () => {
    expect(await updateStatus({ situation: 2, COD: page, SOD: sellerPage, currentOrder, realTime: true })).toBeTruthy();
  });
});

describe(requirement(38), () => {
  test("O avaliador verificará se, ao alterar o status do pedido na tela do cliente, o mesmo também é alterado na tela de detalhes do pedido da pessoa vendedora", async () => {
    expect(await updateStatus({ situation: 3, COD: page, SOD: sellerPage, currentOrder, realTime: true })).toBeTruthy();
  });
});
