namespace JCOrderInventory.Common.Helpers
{



    public class ApiResult<T>
    {
        public ApiResult()
        {
        }
        public ApiResult(T d, bool success, string message)
        {
            Data = d;
            Success = success;
            Message = message;

        }
        public ApiResult(T d, bool success, string message, int statusCode)
        {
            Data = d;
            Success = success;
            Message = message;
            StatusCode = statusCode;
        }
        public ApiResult(T d, bool success, string message, int statusCode, IList<string> errors)
        {
            Data = d;
            Success = success;
            Message = message;
            StatusCode = statusCode;
            Errors = errors;

        }
        public ApiResult(T d, bool success, string message, int statusCode, string exception)
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


}
