using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers
{
    public class BaseController<TService> : ControllerBase
    {

        private readonly TService service;

        public BaseController(TService service)
        {
            this.service = service;
        }

        //public void SetAuthToken(string authToken)
        //{
        //	((IBusinessBase)business).SetAuthToken(authToken);
        //}

        protected TService Service { get => service; }
    }
}
