using System;
namespace Infrastructure.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime BrazilTimeZone(this DateTime dateTime)
        {
            var timezone = TimeZoneInfo.FindSystemTimeZoneById("America/Sao_Paulo");
            return TimeZoneInfo.ConvertTime(dateTime, timezone);
        }

        public static string ToDateDiffSttring(this TimeSpan timeSpan)
        {
            var expireDateTime = "";

            int years = (DateTime.MinValue + timeSpan).Year - 1;
            int months = (DateTime.MinValue + timeSpan).Month - 1;
            int days = (DateTime.MinValue + timeSpan).Day - 2;

            if (years > 0)
                expireDateTime += string.Format("{0} ano(s) ", years);

            if (months > 0)
                expireDateTime += string.Format("{0} mês(es) ", months);

            if (days > 0)
                expireDateTime += string.Format("{0} dia(s) ", days);

            return expireDateTime;
        }
    }
}
