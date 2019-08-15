using Domain.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Collections.Generic;
using System.Net;

namespace WebApi.Filters
{
    public class ExceptionFilter : ExceptionFilterAttribute
    {

        public class ApiError
        {
            public string Detail { get; set; }
            public string Message { get; set; }
            public string Payload { get; set; }
        }

        private static IEnumerable<Exception> GetAllExceptions(Exception outterException)
        {
            var exception = outterException;

            while (exception != null)
            {
                yield return exception;
                exception = exception.InnerException;
            }

        }

        private static ApiError ParseExpcetion(ExceptionContext context)
        {
            return new ApiError()
            {
                Message = context.Exception.Message,
                Detail = context.Exception.StackTrace
            };
        }

        public override void OnException(ExceptionContext context)
        {
            var error = ParseExpcetion(context);
            HttpStatusCode statusCode = HttpStatusCode.InternalServerError;

            if (context.Exception is IDomainException)
            {
                error.Message = context.Exception.Message;
                statusCode = (context.Exception as IDomainException).GetStatusCode();
            }

            context.HttpContext.Response.StatusCode = (int)statusCode;

            context.Result = new JsonResult(error);
            base.OnException(context);
        }
    }
}
namespace Web.Filter
{
    public class ExceptionFilter
    {
        public ExceptionFilter()
        {
        }
    }
}
