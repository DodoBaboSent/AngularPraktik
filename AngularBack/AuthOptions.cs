﻿using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace AngularBack
{
    public class AuthOptions
    {
        public const string ISSUER = "http://localhost:63861"; // издатель токена
        public const string AUDIENCE = "http://localhost:63861"; // потребитель токена
        const string KEY = "mysupersecret_secretkey!123";   // ключ для шифрации
        public const int LIFETIME = 99999; // время жизни токена - 1 минута
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}