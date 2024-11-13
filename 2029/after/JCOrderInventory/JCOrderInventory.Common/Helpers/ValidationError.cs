namespace JCOrderInventory.Common.Helpers
{
    public class ValidationError
    {
        public IList<string> errors { get; set; }

        public ValidationError(IList<string> errors)
        {
            this.errors = errors;
        }
    }
}
