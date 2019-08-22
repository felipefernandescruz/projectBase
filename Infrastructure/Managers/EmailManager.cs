using System;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Managers
{
    public static class EmailManager
    {
        //TODO
        private static readonly string _emailAccount = "email@gmail.com";
        private static readonly string _emailPassword = "SENHA";
        private static readonly string _smtpClient = "smtp.gmail.com";
        private static readonly int _smtpPort = 587;

        public static void SendEmail(string emailTo, string[] bccList, string subject, string body, bool isAsnyc = false)
        {
            MailMessage objEmail = new MailMessage
            {
                From = new MailAddress(_emailAccount, "Base Project", Encoding.GetEncoding("ISO-8859-1"))
            };

            objEmail.To.Add(emailTo);

            if (bccList != null)
            {
                foreach (var mail in bccList)
                {
                    objEmail.Bcc.Add(new MailAddress(mail, "Document Manager - Alert System", Encoding.GetEncoding("ISO-8859-1")));
                }
            }

            objEmail.Priority = MailPriority.High;
            objEmail.IsBodyHtml = true;
            objEmail.Subject = subject;
            objEmail.Body = body;
            objEmail.SubjectEncoding = Encoding.GetEncoding("ISO-8859-1");
            objEmail.BodyEncoding = Encoding.GetEncoding("ISO-8859-1");

            SmtpClient objSmtp = new SmtpClient(_smtpClient, _smtpPort)
            {
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(_emailAccount, _emailPassword)
            };

            if (isAsnyc)
            {
                Task.Factory.StartNew(() => objSmtp.Send(objEmail));
            }
            else
            {
                objSmtp.Send(objEmail);
            }
        }
    }
}
