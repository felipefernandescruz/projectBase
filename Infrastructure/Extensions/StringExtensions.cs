using CryptoHelper;

namespace Infrastructure.Extensions
{
    public static class StringExtensions
    {
        public static string GenerateHash(this string value)
        {
            return Crypto.HashPassword(value);
        }

        public static bool ValidateHash(this string value, string password)
        {
            return Crypto.VerifyHashedPassword(value, password);
        }
    }
}
