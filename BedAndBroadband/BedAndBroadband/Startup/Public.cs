using Simple.Web;

namespace BedAndBroadband.Startup
{
    public class Public : IStartupTask
    {
        public void Run(IConfiguration configuration, IWebEnvironment environment)
        {
            configuration.PublicFileMappings.Add("/", "/index.html");
            configuration.PublicFolders.Add("/Content");
            configuration.PublicFolders.Add("/Scripts");
            configuration.PublicFolders.Add("/Html");
        }
    }
}