namespace JCOrderInventory.Common.Helpers
{

    public class ApiResultError
    {
        public ApiResultError()
        {
        }
        public ApiResultError(string message, int statusCode)
        {
            Message = message;
            StatusCode = statusCode;
        }
        public ApiResultError(string message, int statusCode, IList<string> errors)
        {
            Message = message;
            StatusCode = statusCode;
            Errors = errors;

        }
        public ApiResultError(string message, int statusCode, string exception)
        {
            Message = message;
            StatusCode = statusCode;
            Exception = exception;
        }

        public string Message { get; set; }
        public IList<string> Errors { get; set; }
        public int StatusCode { get; set; }
        public string Exception { get; set; }
    }


}
