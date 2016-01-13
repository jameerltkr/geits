using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mvcapi.Models
{
    public class workdescriptionmodal
    {
        public int id { get; set; }
        public string projecttitle { get; set; }
        public string projectdescription { get; set; }
        public Nullable<System.DateTime> projectcreateddate { get; set; }
        public Nullable<System.DateTime> addedon { get; set; }
        public string projectdevelopers { get; set; }
        public Nullable<bool> isexternal { get; set; }
    }
}