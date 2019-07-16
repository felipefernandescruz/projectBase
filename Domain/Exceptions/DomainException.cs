using System;
namespace Domain.Exceptions
{
    public class DomainException : Exception, IDomainException
    {
        private readonly System.Net.HttpStatusCode statusCode;

        public DomainException(System.Net.HttpStatusCode statusCode = System.Net.HttpStatusCode.InternalServerError)
        {
            this.statusCode = statusCode;
        }

        public DomainException(string message, System.Net.HttpStatusCode statusCode = System.Net.HttpStatusCode.InternalServerError) : base(message)
        {
            this.statusCode = statusCode;
        }

        public DomainException(string message, Exception innerException, System.Net.HttpStatusCode statusCode = System.Net.HttpStatusCode.InternalServerError) : base(message, innerException)
        {
            this.statusCode = statusCode;
        }

        public System.Net.HttpStatusCode GetStatusCode()
        {
            return statusCode;
        }
    }
}
