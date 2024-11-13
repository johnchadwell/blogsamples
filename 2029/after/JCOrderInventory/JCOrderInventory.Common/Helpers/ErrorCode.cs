namespace JCOrderInventory.Common.Helpers
{

    public class ControllerErrorCode
    {
        public const string VALIDATION_ERROR = "Validation Error";
    }

    // Service Layer Error Codes
    public class ServiceErrorCode
    {
        public const string EXCEPTION = "ServiceError: Exception encountered.";
        public const string GET_ORDER_BY_ID_NOT_FOUND = "ServiceError: Order not found.";
        public const string GET_ORDER_BY_ID_ERROR = "ServiceError: Error while fetching Order by Id.";
        public const string GET_ORDER_BY_ID_EXCEPTION = "ServiceError: Exception while fetching Order by Id.";
        public const string GET_ORDERS_NOT_FOUND = "ServiceError: Orders not found.";
        public const string GET_ORDERS_ERROR = "ServiceError: Error while fetching all Orders.";
        public const string GET_ORDERS_EXCEPTION = "ServiceError: Exception while fetching all Orders.";

        public const string POST_ORDER_EXCEPTION = "ServiceError: Exception while posting new Order.";
        public const string POST_ORDER_INTERNAL_EXCEPTION = "ServiceError: Internal Exception while posting new Order.";

        public const string ORDER_STATUS_NOT_FOUND = "ServiceError: Order Status not found.";
        public const string ORDER_LINE_ITEM_STATUS_NOT_FOUND = "ServiceError:Order Line Item Status not found.";
    }

    // Repository Layer Error Codes
    public class RepositoryErrorCode
    {
        public const string EXCEPTION = "Repository Error: Exception encountered.";
        public const string GET_ORDER_BY_ID_EXCEPTION = "Repository Error: Exception while fetching Order by Id.";
        public const string GET_ORDERS_EXCEPTION = "Repository Error: Exception while fetching all Orders.";
        public const string ORDER_NOT_FOUND = "Repository Error: Order not found.";
        public const string ORDER_LINE_ITEMS_NOT_FOUND = "Repository Error: Order Line Item not found.";
        public const string ORDER_STATUS_NOT_FOUND = "Repository Error: Order Status not found.";
        public const string ORDER_LINE_ITEM_STATUS_NOT_FOUND = "Repository Error: Order Line Item Status not found.";
        public const string POST_ORDER_EXCEPTION = "Repository Error: Exception while posting new Order.";
    }
}
