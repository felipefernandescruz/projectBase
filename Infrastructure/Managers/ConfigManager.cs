using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace Infrastructure.Managers
{

    public class ConfigManager
    {
        private static IConfigurationRoot GetConfig()
        {
            IConfigurationBuilder builder = new ConfigurationBuilder()
               .SetBasePath(Directory.GetCurrentDirectory())
               .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
               .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true);

            return builder.Build();
        }

        private static string GetByKey(string key)
        {
            var config = GetConfig();
            return config[key];
        }

        public static string DatabaseUrl => GetByKey("DatabaseUrl");
        public static string DatabaseCertificatePath => GetByKey("DatabaseCertificatePath");
        public static string DatabaseName => GetByKey("DatabaseName");
        public static string JwtSecret => GetByKey("JwtSecret");
        public static string SystemDomain => GetByKey("SystemDomain");
    }
}