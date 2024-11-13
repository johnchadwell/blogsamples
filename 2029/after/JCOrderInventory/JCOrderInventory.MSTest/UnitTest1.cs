using JCOrderInventory.Services;

namespace JCOrderInventory.MSTest
{
    [TestClass]
    public class UnitTest1
    {
        private IOrderService _orderService;
        public UnitTest1(){}
        public UnitTest1(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [TestMethod]
        public void TestMethod1()
        {
            //int expected = _orderService.GetOrderByIdAsync(0).Result;
            Assert.AreEqual(1, 1);
        }
    }
}