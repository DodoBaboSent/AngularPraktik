﻿using static System.Runtime.InteropServices.JavaScript.JSType;

namespace AngularPraktik
{
    public class MenuCafe
    {
        public int id { get; set; }
        public string? name { get; set; }
        public bool vegan { get; set; }
        public int price { get; set; }
            public string section { get; set; }
            public bool childrenMenu { get; set; }
        public string ?image { get; set; }
}
}