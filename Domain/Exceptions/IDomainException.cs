using System;
using System.Net;

namespace Domain.Exceptions
{
    public interface IDomainException
    {
        HttpStatusCode GetStatusCode();
    }
}
