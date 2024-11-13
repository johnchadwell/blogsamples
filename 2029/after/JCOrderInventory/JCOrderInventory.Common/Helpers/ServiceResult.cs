namespace JCOrderInventory.Common.Helpers
{

    public class ServiceResult<T>
    {
        public ServiceResult()
        {
        }
        public ServiceResult(T d, bool success, string message)
        {
            Data = d;
            Success = success;
            Message = message;

        }
        public ServiceResult(T d, bool success, string message, int statusCode)
        {
            Data = d;
            Success = success;
            Message = message;
            StatusCode = statusCode;

        }
        public ServiceResult(T d, bool success, string message, int statusCode, IList<string> errors)
        {
            Data = d;
            Success = success;
            Message = message;
            StatusCode = statusCode;
            Errors = errors;

        }
        public ServiceResult(T d, bool success, string message, int statusCode, string exception)
        {
            Data = d;
            Success = success;
            Message = message;
            StatusCode = statusCode;
            Exception = exception;
        }
        public bool Success { get; set; }
        public string Message { get; set; }
        public IList<string> Errors { get; set; }
        public int StatusCode { get; set; }
        public string Exception { get; set; }
        public T Data { get; set; }
    }


    //public class OperationResultBase<T> where T : OperationResultBase<T>
    //    //public class OperationResultBase<T> where T : class
    //{
    //    //public bool Success { get; set; }
    //    //public string Message { get; set; }

    //}
    //public class OP<T> where T : class
    //{
    //    public OP(List<T> d, bool success, string message)
    //    {
    //        Data = d;
    //        Success = success;
    //        Message = message;

    //    }
    //    public OP(T d, bool success, string message)
    //    {
    //        Data = d;
    //        Success = success;
    //        Message = message;

    //    }

    //    public bool Success { get; set; }
    //    public string Message { get; set; }

    //    // how to convert to and from object?
    //    public object Data { get; set; }

    //}


}
