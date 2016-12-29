﻿import System;
import System.Windows.Forms;
import Fiddler;
import System.Threading;

// INTRODUCTION
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first starts, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// GLOBALIZATION NOTE:
// Be sure to save this file with UTF-8 Encoding if using any non-ASCII characters
// in strings, etc.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook
//
// FiddlerScript Editor: 
// http://fiddler2.com/fiddlerscript-editor

class Handlers
{
    // The following snippet demonstrates a custom-bound column for the Web Sessions list.
    // See http://fiddler2.com/r/?fiddlercolumns for more info
    /*
      public static BindUIColumn("Method", 60)
      function FillMethodColumn(oS: Session): String {
         return oS.RequestMethod;
      }
    */

    // The following snippet demonstrates how to create a custom tab that shows simple text
    /*
       public BindUITab("Flags")
       static function FlagsReport(arrSess: Session[]):String {
        var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
        for (var i:int = 0; i<arrSess.Length; i++)
        {
            oSB.AppendLine("SESSION FLAGS");
            oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
            for(var sFlag in arrSess[i].oFlags)
            {
                oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
            }
        }
        return oSB.ToString();
    }
    */

    // You can create a custom menu like so:
    /*
    QuickLinkMenu("&Links") 
    QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
    QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
    public static function DoLinksMenu(sText: String, sAction: String)
    {
        Utilities.LaunchHyperlink(sAction);
    }
    */

    public static RulesOption("Hide 304s")
    BindPref("fiddlerscript.rules.Hide304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    BindPref("fiddlerscript.rules.AutoAuth")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    RulesString("&User-Agents", true) 
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone7", "Mozilla/4.0 (compatible: MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; SGH-i917)")
    RulesStringValue(2,"WinPhone7.5", "Mozilla/5.0 (compatible: MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; SAMSUNG; SGH-i917)")
    RulesStringValue(3,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(4,"Safari7 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9) AppleWebKit/537.71 (KHTML, like Gecko) Version/7.0 Safari/537.71")
    RulesStringValue(5,"iPad", "Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25")
    RulesStringValue(6,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A405 Safari/8536.25")
    RulesStringValue(7,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(8,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(9,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(10,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(11,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(12,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(13,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
    RulesStringValue(14,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
    RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.11")
    RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(17,"&Firefox 26", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:26.0) Gecko/20100101 Firefox/26.0")
    RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
    RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
    RulesStringValue(20,"Chrome (Win8)", "Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.41 Safari/537.36")
    RulesStringValue(21,"ChromeBook", "Mozilla/5.0 (X11; CrOS armv7l 2913.260.0) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.99 Safari/537.11")
    RulesStringValue(22,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(23,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(24,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;
        
    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() { 
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        FiddlerApplication.UI.actUpdateInspector(true,true);
    }

    static function OnBoot() {
        // MessageBox.Show("Fiddler has finished booting");
        // System.Diagnostics.Process.Start("iexplore.exe");

        // FiddlerObject.UI.ActivateRequestInspector("HEADERS");
        // FiddlerObject.UI.ActivateResponseInspector("HEADERS");
    }
    
    static function OnShutdown() {
        // MessageBox.Show("Fiddler has shutdown");
    }

    static function OnAttach() {
        // MessageBox.Show("Fiddler is now the system proxy");
    }

    static function OnDetach() {
        // MessageBox.Show("Fiddler is no longer the system proxy");
    }

    static function OnBeforeRequest(oSession: Session) {
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) {	oSession["ui-color"] = "red";	}

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {	oSession["ui-italic"] = "yup";	}

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";	// Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith; 
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300"; 
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150"; 
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA; 
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the 
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            //
            // WARNING: This setting poses a security risk if remote 
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see 
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
/*
    static function OnPeekAtRequestHeaders(oSession: Session) {
    }
*/

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function 
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time 
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
    // which suggests that tampering with the response body is necessary.
    // 
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }
        
        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }
    }

/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;

        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // FiddlerObject.UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // FiddlerApplication.UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot"); 
    
        //		    
        // Print Web Socket frame every 2 seconds
        //
        printSocketTimer =
            new System.Threading.Timer(PrintSocketMessage, null, 0, 2000);
    }
    
    
    static var socketMessages = new System.Collections.Queue();
    static var printSocketTimer = null;
    static var requestBodyBuilder = new System.Text.StringBuilder();
    static var requestUrlBuilder = new System.Text.StringBuilder();
    static var requestPayloadIsJson = false;
    static var requestPartCount = 0;
   
        
    static function OnWebSocketMessage(oMsg: WebSocketMessage)
    {       
        //FiddlerApplication.Log.LogString(oMsg.ToString());
        Monitor.Enter(socketMessages);      
        socketMessages.Enqueue(oMsg);
        Monitor.Exit(socketMessages);          
    }
       
    static function PrintSocketMessage(stateInfo: Object)
    {
        Monitor.Enter(socketMessages);        
       
        while (socketMessages.Count > 0)
        {
            var oMsg = socketMessages.Dequeue();
            ExtractSocketMessage(oMsg);          
        }
       
        Monitor.Exit(socketMessages);       
    }
       
    static function ExtractSocketMessage(oMsg: WebSocketMessage)
    {      
        if (oMsg.FrameType != WebSocketFrameTypes.Continuation)
        {               
            var messageID = String.Format(
                "{0}.{1}", oMsg.IsOutbound ? "Client" : "Server", oMsg.ID);
           
            var wsSession = GetWsSession(oMsg);
            requestUrlBuilder.AppendFormat("{0}.{1}", wsSession, messageID);
               
            requestBodyBuilder.Append("{");
            requestBodyBuilder.AppendFormat("\"doneTime\": \"{0}\",", 
                oMsg.Timers.dtDoneRead.ToString("hh:mm:ss.fff"));
            requestBodyBuilder.AppendFormat("\"messageType\": \"{0}\",", 
                oMsg.FrameType);
            requestBodyBuilder.AppendFormat("\"messageID\": \"{0}\",", messageID);
            requestBodyBuilder.AppendFormat("\"wsSession\": \"{0}\",", wsSession);
            requestBodyBuilder.Append("\"payload\": ");
               
                
            var payloadString = oMsg.PayloadAsString();
            if (oMsg.FrameType == WebSocketFrameTypes.Binary)
            {
                payloadString = HexToString(payloadString); 
            }
                
            if (payloadString.StartsWith("{"))
            {
                requestPayloadIsJson = true;                   
            }
            else
            {
                requestBodyBuilder.Append("\"");
            }
               
            requestBodyBuilder.AppendFormat("{0}", payloadString);     
                          
        }
        else
        {
            var payloadString = HexToString(oMsg.PayloadAsString());               
            requestBodyBuilder.AppendFormat("{0}", payloadString);               
        }
           
        requestPartCount++;
           
        if (oMsg.IsFinalFrame)
        {
            if (!requestPayloadIsJson)
            {
                requestBodyBuilder.Append("\"");                   
            }
           
            requestBodyBuilder.AppendFormat(", \"requestPartCount\": \"{0}\"", 
                requestPartCount);
               
            requestBodyBuilder.Append("}");      
            
                                
            // Generate Fake WebSocket Request
            SendRequest(requestUrlBuilder.ToString(), requestBodyBuilder.ToString());              
                        
            requestBodyBuilder.Clear();
            requestUrlBuilder.Clear();
            requestPayloadIsJson = false;
            requestPartCount = 0;
        }       
    }
       
    static function SendRequest(urlPath: String, message: String)
    {
       
        var request = String.Format(
            "POST http://fakewebsocket/{0} HTTP/1.1\n" +
            "User-Agent: Fiddler\n" +
            "Content-Type: application/json; charset=utf-8\n" +
            "Host: fakewebsocket\n" +
            "Content-Length: {1}\n\n{2}",
            urlPath, message.Length, message);
           
        FiddlerApplication.oProxy.SendRequest(request, null);
    }
       
    static function GetWsSession(oMsg: WebSocketMessage)
    {
        var message = oMsg.ToString();
        var index = message.IndexOf(".");
        var wsSession = message.Substring(0, index);
       
        return wsSession;
    }
       
    static function HexToString(sourceHex: String)
    {
        sourceHex = sourceHex.Replace("-", "");
   
        var sb = new System.Text.StringBuilder();
   
        for (var i = 0; i < sourceHex.Length; i += 2)
        {
            var hs = sourceHex.Substring(i, 2);
            sb.Append(Convert.ToChar(Convert.ToUInt32(hs, 16)));
        }
       
        var ascii = sb.ToString();
        return ascii;
    }

    // These static variables are used for simple breakpointing & other QuickExec rules 
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

    FiddlerObject.StatusText = "ExecAction: " + sParams[0];

    var sAction = sParams[0].toLowerCase();
    switch (sAction) {
    case "bold":
        if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return;}
        uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
        return true;
    case "bp":
        FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
        return true;
    case "bps":
        if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return;}
        bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
        return true;
    case "bpv":
    case "bpm":
        if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return;}
        bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
        return true;
    case "bpu":
        if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return;}
        bpRequestURI = sParams[1]; 
        FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
        return true;
    case "bpa":
    case "bpafter":
        if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return;}
        bpResponseURI = sParams[1]; 
        FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
        return true;
    case "overridehost":
        if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return;}
        gs_OverridenHost = sParams[1].toLowerCase();
        gs_OverrideHostWith = sParams[2];
        FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
        return true;
    case "urlreplace":
        if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return;}
        gs_ReplaceToken = sParams[1];
        gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
        FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
        return true;
    case "allbut":
    case "keeponly":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return;}
        FiddlerObject.UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
        FiddlerObject.UI.actRemoveUnselectedSessions();
        FiddlerObject.UI.lvSessions.SelectedItems.Clear();
        FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
        return true;
    case "stop":
        FiddlerObject.UI.actDetachProxy();
        return true;
    case "start":
        FiddlerObject.UI.actAttachProxy();
        return true;
    case "cls":
    case "clear":
        FiddlerObject.UI.actRemoveAllSessions();
        return true;
    case "g":
    case "go":
        FiddlerObject.UI.actResumeAllSessions();
        return true;
    case "goto":
        if (sParams.Length != 2) return;
        Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
        return true;
    case "help":
        Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
        return true;
    case "hide":
        FiddlerObject.UI.actMinimizeToTray();
        return true;
    case "log":
        FiddlerApplication.Log.LogString((sParams.Length<2) ? FiddlerApplication.Log.LogString("User couldn't think of anything to say...") : sParams[1]);
        return true;
    case "nuke":
        FiddlerObject.UI.actClearWinINETCache();
        FiddlerObject.UI.actClearWinINETCookies(); 
        return true;
    case "screenshot":
        FiddlerApplication.UI.actCaptureScreenshot(false);
        return true;
    case "show":
        FiddlerObject.UI.actRestoreWindow();
        return true;
    case "tail":
        if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return;}
        FiddlerObject.UI.TrimSessionList(int.Parse(sParams[1]));
        return true;
    case "quit":
        FiddlerObject.UI.actExit();
        return true;
    case "dump":
        FiddlerObject.UI.actSelectAll();
        FiddlerObject.UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
        FiddlerObject.UI.actRemoveAllSessions();
        FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
        return true;

    default:
        if (sAction.StartsWith("http") || sAction.StartsWith("www")){
            System.Diagnostics.Process.Start(sParams[0]);
            return true;
        }
        else
        {
            FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
            return false;
        }
    }
    }
}


