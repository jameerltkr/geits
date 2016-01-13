using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using mvcapi.Models;

namespace mvcapi.Controllers
{
    public class HomeController : ApiController
    {
        public List<WorkDescription> getHomeData()
        {
            geitsdbEntities dbcontext = new geitsdbEntities();

            return dbcontext.WorkDescriptions.ToList();

            dbcontext.Dispose();
        }

    }
}
