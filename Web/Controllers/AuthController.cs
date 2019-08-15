using System;
using System.Collections.Generic;
using Domain.Shared.Enum;
using Domain.Users;
using Domain.Users.Models;
using Microsoft.AspNetCore.Mvc;
using Web.Interfaces;

namespace Web.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : BaseController<IUserService>, IBaseController
    {
        public AuthController(UserService userService) : base(new UserService())
        {
        }

        [HttpPut]
        [Route("password")]
        public void UpdatePassword([FromBody] ChangePasswordModel model)
        {
            Service.UpdatePassword(model.email, model.token, model.password, model.confirmPassword);
        }
    }
}
