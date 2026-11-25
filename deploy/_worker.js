var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js
var Version = "2026-05-17 18:52:03";
var config_JSON;
var \u53CD\u4EE3IP = "";
var \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
var \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = false;
var \u6211\u7684SOCKS5\u8D26\u53F7 = "";
var parsedSocks5Address = {};
var \u7F13\u5B58SOCKS5\u767D\u540D\u5355 = null;
var \u7F13\u5B58\u53CD\u4EE3IP;
var \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4;
var \u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = 0;
var \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = true;
var \u8C03\u8BD5\u65E5\u5FD7\u6253\u5370 = false;
var SOCKS5\u767D\u540D\u5355 = ["*tapecontent.net", "*cloudatacdn.com", "*loadshare.org", "*cdn-centaurus.com", "scholar.google.com"];
var Pages\u9759\u6001\u9875\u9762 = "https://edt-pages.github.io";
async function 静态页面响应(env, name, search = "") {
	try {
		if (env.KV && typeof env.KV.get === "function") {
			const html = await env.KV.get("page_" + name);
			if (html) return new Response(html, { status: 200, headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "no-store" } });
		}
	} catch (e) {}
	return fetch(Pages静态页面 + "/" + name + search);
}

var WS\u65E9\u671F\u6570\u636E\u6700\u5927\u5B57\u8282 = 8 * 1024;
var WS\u65E9\u671F\u6570\u636E\u6700\u5927\u5934\u957F\u5EA6 = Math.ceil(WS\u65E9\u671F\u6570\u636E\u6700\u5927\u5B57\u8282 * 4 / 3) + 4;
var \u4E0A\u884C\u5408\u5305\u76EE\u6807\u5B57\u8282 = 16 * 1024;
var \u4E0A\u884C\u961F\u5217\u6700\u5927\u5B57\u8282 = 16 * 1024 * 1024;
var \u4E0A\u884C\u961F\u5217\u6700\u5927\u6761\u76EE = 4096;
var \u4E0B\u884CGrain\u5305\u5B57\u8282 = 32 * 1024;
var \u4E0B\u884CGrain\u5C3E\u90E8\u9608\u503C = 512;
var \u4E0B\u884CGrain\u9759\u9ED8\u6BEB\u79D2 = 0;
var TCP\u5E76\u53D1\u62E8\u53F7\u6570 = 2;
var worker_default = {
  async fetch(request, env, ctx) {
    let \u8BF7\u6C42URL\u6587\u672C = request.url.replace(/%5[Cc]/g, "").replace(/\\/g, "");
    const \u8BF7\u6C42URL\u951A\u70B9\u7D22\u5F15 = \u8BF7\u6C42URL\u6587\u672C.indexOf("#");
    const \u8BF7\u6C42URL\u4E3B\u4F53\u90E8\u5206 = \u8BF7\u6C42URL\u951A\u70B9\u7D22\u5F15 === -1 ? \u8BF7\u6C42URL\u6587\u672C : \u8BF7\u6C42URL\u6587\u672C.slice(0, \u8BF7\u6C42URL\u951A\u70B9\u7D22\u5F15);
    if (!\u8BF7\u6C42URL\u4E3B\u4F53\u90E8\u5206.includes("?") && /%3f/i.test(\u8BF7\u6C42URL\u4E3B\u4F53\u90E8\u5206)) {
      const \u8BF7\u6C42URL\u951A\u70B9\u90E8\u5206 = \u8BF7\u6C42URL\u951A\u70B9\u7D22\u5F15 === -1 ? "" : \u8BF7\u6C42URL\u6587\u672C.slice(\u8BF7\u6C42URL\u951A\u70B9\u7D22\u5F15);
      \u8BF7\u6C42URL\u6587\u672C = \u8BF7\u6C42URL\u4E3B\u4F53\u90E8\u5206.replace(/%3f/i, "?") + \u8BF7\u6C42URL\u951A\u70B9\u90E8\u5206;
    }
    const url = new URL(\u8BF7\u6C42URL\u6587\u672C);
    const UA = request.headers.get("User-Agent") || "null";
    const upgradeHeader = (request.headers.get("Upgrade") || "").toLowerCase(), contentType = (request.headers.get("content-type") || "").toLowerCase();
    const \u7BA1\u7406\u5458\u5BC6\u7801 = env.ADMIN || env.admin || env.PASSWORD || env.password || env.pswd || env.TOKEN || env.KEY || env.UUID || env.uuid;
    const \u52A0\u5BC6\u79D8\u94A5 = env.KEY || "\u52FF\u52A8\u6B64\u9ED8\u8BA4\u5BC6\u94A5\uFF0C\u6709\u9700\u6C42\u8BF7\u81EA\u884C\u901A\u8FC7\u6DFB\u52A0\u53D8\u91CFKEY\u8FDB\u884C\u4FEE\u6539";
    const userIDMD5 = await MD5MD5(\u7BA1\u7406\u5458\u5BC6\u7801 + \u52A0\u5BC6\u79D8\u94A5);
    const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
    const envUUID = env.UUID || env.uuid;
    const userID = envUUID && uuidRegex.test(envUUID) ? envUUID.toLowerCase() : [userIDMD5.slice(0, 8), userIDMD5.slice(8, 12), "4" + userIDMD5.slice(13, 16), "8" + userIDMD5.slice(17, 20), userIDMD5.slice(20)].join("-");
    const hosts = env.HOST ? (await \u6574\u7406\u6210\u6570\u7EC4(env.HOST)).map((h) => h.toLowerCase().replace(/^https?:\/\//, "").split("/")[0].split(":")[0]) : [url.hostname];
    const host = hosts[0];
    const \u8BBF\u95EE\u8DEF\u5F84 = url.pathname.slice(1).toLowerCase();
    \u8C03\u8BD5\u65E5\u5FD7\u6253\u5370 = ["1", "true"].includes(env.DEBUG) || \u8C03\u8BD5\u65E5\u5FD7\u6253\u5370;
    if (env.PROXYIP) {
      const proxyIPs = await \u6574\u7406\u6210\u6570\u7EC4(env.PROXYIP);
      \u53CD\u4EE3IP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
      \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
    } else \u53CD\u4EE3IP = (request.cf.colo + ".PrOxYIp.CmLiUsSsS.nEt").toLowerCase();
    const \u8BBF\u95EEIP = request.headers.get("CF-Connecting-IP") || request.headers.get("True-Client-IP") || request.headers.get("X-Real-IP") || request.headers.get("X-Forwarded-For") || request.headers.get("Fly-Client-IP") || request.headers.get("X-Appengine-Remote-Addr") || request.headers.get("X-Cluster-Client-IP") || "\u672A\u77E5IP";
    if (\u7F13\u5B58SOCKS5\u767D\u540D\u5355 === null) {
      if (env.GO2SOCKS5) SOCKS5\u767D\u540D\u5355 = [...new Set(SOCKS5\u767D\u540D\u5355.concat(await \u6574\u7406\u6210\u6570\u7EC4(env.GO2SOCKS5)))];
      \u7F13\u5B58SOCKS5\u767D\u540D\u5355 = SOCKS5\u767D\u540D\u5355;
    } else SOCKS5\u767D\u540D\u5355 = \u7F13\u5B58SOCKS5\u767D\u540D\u5355;
    if (\u8BBF\u95EE\u8DEF\u5F84 === "version" && url.searchParams.get("uuid") === userID) {
      return new Response(JSON.stringify({ Version: Number(String(Version).replace(/\D+/g, "")) }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
    } else if (\u7BA1\u7406\u5458\u5BC6\u7801 && upgradeHeader === "websocket") {
      await \u53CD\u4EE3\u53C2\u6570\u83B7\u53D6(url, userID);
      log(`[WebSocket] \u547D\u4E2D\u8BF7\u6C42: ${url.pathname}${url.search}`);
      return await \u5904\u7406WS\u8BF7\u6C42(request, userID, url);
    } else if (\u7BA1\u7406\u5458\u5BC6\u7801 && !\u8BBF\u95EE\u8DEF\u5F84.startsWith("admin/") && \u8BBF\u95EE\u8DEF\u5F84 !== "login" && request.method === "POST") {
      await \u53CD\u4EE3\u53C2\u6570\u83B7\u53D6(url, userID);
      const referer = request.headers.get("Referer") || "";
      const \u547D\u4E2DXHTTP\u7279\u5F81 = referer.includes("x_padding", 14) || referer.includes("x_padding=");
      if (!\u547D\u4E2DXHTTP\u7279\u5F81 && contentType.startsWith("application/grpc")) {
        log(`[gRPC] \u547D\u4E2D\u8BF7\u6C42: ${url.pathname}${url.search}`);
        return await \u5904\u7406gRPC\u8BF7\u6C42(request, userID);
      }
      log(`[XHTTP] \u547D\u4E2D\u8BF7\u6C42: ${url.pathname}${url.search}`);
      return await \u5904\u7406XHTTP\u8BF7\u6C42(request, userID);
    } else {
      if (url.protocol === "http:") return Response.redirect(url.href.replace(`http://${url.hostname}`, `https://${url.hostname}`), 301);
      if (!\u7BA1\u7406\u5458\u5BC6\u7801) return 静态页面响应(env, "noADMIN").then((r) => {
        const headers = new Headers(r.headers);
        headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        headers.set("Pragma", "no-cache");
        headers.set("Expires", "0");
        return new Response(r.body, { status: 404, statusText: r.statusText, headers });
      });
      if (env.KV && typeof env.KV.get === "function") {
        const \u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 = url.pathname.slice(1);
        if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === \u52A0\u5BC6\u79D8\u94A5 && \u52A0\u5BC6\u79D8\u94A5 !== "\u52FF\u52A8\u6B64\u9ED8\u8BA4\u5BC6\u94A5\uFF0C\u6709\u9700\u6C42\u8BF7\u81EA\u884C\u901A\u8FC7\u6DFB\u52A0\u53D8\u91CFKEY\u8FDB\u884C\u4FEE\u6539") {
          const params = new URLSearchParams(url.search);
          params.set("token", await MD5MD5(host + userID));
          return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": `/sub?${params.toString()}` } });
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "login") {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (authCookie == await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/admin" } });
          if (request.method === "POST") {
            const formData = await request.text();
            const params = new URLSearchParams(formData);
            const \u8F93\u5165\u5BC6\u7801 = params.get("password");
            if (\u8F93\u5165\u5BC6\u7801 === (typeof \u7BA1\u7406\u5458\u5BC6\u7801 === "string" ? \u7BA1\u7406\u5458\u5BC6\u7801.replace(/[\r\n]/g, "") : \u7BA1\u7406\u5458\u5BC6\u7801)) {
              const \u54CD\u5E94 = new Response(JSON.stringify({ success: true }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              \u54CD\u5E94.headers.set("Set-Cookie", `auth=${await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Strict`);
              return \u54CD\u5E94;
            }
          }
          return 静态页面响应(env, "login");
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin" || \u8BBF\u95EE\u8DEF\u5F84.startsWith("admin/")) {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (!authCookie || authCookie !== await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/login" } });
          if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/log.json") {
            const \u8BFB\u53D6\u65E5\u5FD7\u5185\u5BB9 = await env.KV.get("log.json") || "[]";
            return new Response(\u8BFB\u53D6\u65E5\u5FD7\u5185\u5BB9, { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/getCloudflareUsage") {
            try {
              const Usage_JSON = await getCloudflareUsage(url.searchParams.get("Email"), url.searchParams.get("GlobalAPIKey"), url.searchParams.get("AccountID"), url.searchParams.get("APIToken"));
              return new Response(JSON.stringify(Usage_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
            } catch (err) {
              const errorResponse = { msg: "\u67E5\u8BE2\u8BF7\u6C42\u91CF\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
              return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
            }
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/getADDAPI") {
            if (url.searchParams.get("url")) {
              const \u5F85\u9A8C\u8BC1\u4F18\u9009URL = url.searchParams.get("url");
              try {
                new URL(\u5F85\u9A8C\u8BC1\u4F18\u9009URL);
                const \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9 = await \u8BF7\u6C42\u4F18\u9009API([\u5F85\u9A8C\u8BC1\u4F18\u9009URL], url.searchParams.get("port") || "443");
                let \u4F18\u9009API\u7684IP = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0].length > 0 ? \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0] : \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[1];
                \u4F18\u9009API\u7684IP = \u4F18\u9009API\u7684IP.map((item) => item.replace(/#(.+)$/, (_, remark) => "#" + decodeURIComponent(remark)));
                return new Response(JSON.stringify({ success: true, data: \u4F18\u9009API\u7684IP }, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (err) {
                const errorResponse = { msg: "\u9A8C\u8BC1\u4F18\u9009API\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
                return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            }
            return new Response(JSON.stringify({ success: false, data: [] }, null, 2), { status: 403, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/check") {
            const \u4EE3\u7406\u534F\u8BAE = ["socks5", "http", "https", "turn", "sstp"].find((\u7C7B\u578B) => url.searchParams.has(\u7C7B\u578B)) || null;
            if (!\u4EE3\u7406\u534F\u8BAE) return new Response(JSON.stringify({ error: "\u7F3A\u5C11\u4EE3\u7406\u53C2\u6570" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
            const \u4EE3\u7406\u53C2\u6570 = url.searchParams.get(\u4EE3\u7406\u534F\u8BAE);
            const startTime = Date.now();
            let \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94;
            try {
              parsedSocks5Address = await \u83B7\u53D6SOCKS5\u8D26\u53F7(\u4EE3\u7406\u53C2\u6570, \u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3(\u4EE3\u7406\u534F\u8BAE));
              const { username, password, hostname, port } = parsedSocks5Address;
              const \u5B8C\u6574\u4EE3\u7406\u53C2\u6570 = username && password ? `${username}:${password}@${hostname}:${port}` : `${hostname}:${port}`;
              try {
                const \u68C0\u6D4B\u4E3B\u673A = "cloudflare.com", \u68C0\u6D4B\u7AEF\u53E3 = 443, encoder = new TextEncoder(), decoder = new TextDecoder();
                const TCP\u8FDE\u63A5 = \u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668(request);
                let tcpSocket = null, tlsSocket = null;
                try {
                  tcpSocket = \u4EE3\u7406\u534F\u8BAE === "socks5" ? await socks5Connect(\u68C0\u6D4B\u4E3B\u673A, \u68C0\u6D4B\u7AEF\u53E3, new Uint8Array(0), TCP\u8FDE\u63A5) : \u4EE3\u7406\u534F\u8BAE === "turn" ? await turnConnect(parsedSocks5Address, \u68C0\u6D4B\u4E3B\u673A, \u68C0\u6D4B\u7AEF\u53E3, TCP\u8FDE\u63A5) : \u4EE3\u7406\u534F\u8BAE === "sstp" ? await sstpConnect(parsedSocks5Address, \u68C0\u6D4B\u4E3B\u673A, \u68C0\u6D4B\u7AEF\u53E3, TCP\u8FDE\u63A5) : \u4EE3\u7406\u534F\u8BAE === "https" && isIPHostname(hostname) ? await httpsConnect(\u68C0\u6D4B\u4E3B\u673A, \u68C0\u6D4B\u7AEF\u53E3, new Uint8Array(0), TCP\u8FDE\u63A5) : await httpConnect(\u68C0\u6D4B\u4E3B\u673A, \u68C0\u6D4B\u7AEF\u53E3, new Uint8Array(0), \u4EE3\u7406\u534F\u8BAE === "https", TCP\u8FDE\u63A5);
                  if (!tcpSocket) throw new Error("\u65E0\u6CD5\u8FDE\u63A5\u5230\u4EE3\u7406\u670D\u52A1\u5668");
                  tlsSocket = new TlsClient(tcpSocket, { serverName: \u68C0\u6D4B\u4E3B\u673A, insecure: true });
                  await tlsSocket.handshake();
                  await tlsSocket.write(encoder.encode(`GET /cdn-cgi/trace HTTP/1.1\r
Host: ${\u68C0\u6D4B\u4E3B\u673A}\r
User-Agent: Mozilla/5.0\r
Connection: close\r
\r
`));
                  let responseBuffer = new Uint8Array(0), headerEndIndex = -1, contentLength = null, chunked = false;
                  const \u6700\u5927\u54CD\u5E94\u5B57\u8282 = 64 * 1024;
                  while (responseBuffer.length < \u6700\u5927\u54CD\u5E94\u5B57\u8282) {
                    const value = await tlsSocket.read();
                    if (!value) break;
                    if (value.byteLength === 0) continue;
                    responseBuffer = \u62FC\u63A5\u5B57\u8282\u6570\u636E(responseBuffer, value);
                    if (headerEndIndex === -1) {
                      const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 13 && responseBuffer[i + 1] === 10 && responseBuffer[i + 2] === 13 && responseBuffer[i + 3] === 10);
                      if (crlfcrlf !== -1) {
                        headerEndIndex = crlfcrlf + 4;
                        const headers = decoder.decode(responseBuffer.slice(0, headerEndIndex));
                        const statusLine = headers.split("\r\n")[0] || "";
                        const statusMatch = statusLine.match(/HTTP\/\d\.\d\s+(\d+)/);
                        const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
                        if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`\u4EE3\u7406\u68C0\u6D4B\u8BF7\u6C42\u5931\u8D25: ${statusLine || "\u65E0\u6548\u54CD\u5E94"}`);
                        const lengthMatch = headers.match(/\r\nContent-Length:\s*(\d+)/i);
                        if (lengthMatch) contentLength = parseInt(lengthMatch[1], 10);
                        chunked = /\r\nTransfer-Encoding:\s*chunked/i.test(headers);
                      }
                    }
                    if (headerEndIndex !== -1 && contentLength !== null && responseBuffer.length >= headerEndIndex + contentLength) break;
                    if (headerEndIndex !== -1 && chunked && decoder.decode(responseBuffer).includes("\r\n0\r\n\r\n")) break;
                  }
                  if (headerEndIndex === -1) throw new Error("\u4EE3\u7406\u68C0\u6D4B\u54CD\u5E94\u5934\u8FC7\u957F\u6216\u65E0\u6548");
                  const response = decoder.decode(responseBuffer);
                  const ip = response.match(/(?:^|\n)ip=(.*)/)?.[1];
                  const loc = response.match(/(?:^|\n)loc=(.*)/)?.[1];
                  if (!ip || !loc) throw new Error("\u4EE3\u7406\u68C0\u6D4B\u54CD\u5E94\u65E0\u6548");
                  \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94 = { success: true, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, ip, loc, responseTime: Date.now() - startTime };
                } finally {
                  try {
                    tlsSocket ? tlsSocket.close() : await tcpSocket?.close?.();
                  } catch (e) {
                  }
                }
              } catch (error) {
                \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94 = { success: false, error: error.message, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u5B8C\u6574\u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
              }
            } catch (err) {
              \u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94 = { success: false, error: err.message, proxy: \u4EE3\u7406\u534F\u8BAE + "://" + \u4EE3\u7406\u53C2\u6570, responseTime: Date.now() - startTime };
            }
            return new Response(JSON.stringify(\u68C0\u6D4B\u4EE3\u7406\u54CD\u5E94, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          }
          config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID, UA);
          if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/init") {
            try {
              config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID, UA, true);
              ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Init_Config", config_JSON));
              config_JSON.init = "\u914D\u7F6E\u5DF2\u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u503C";
              return new Response(JSON.stringify(config_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
            } catch (err) {
              const errorResponse = { msg: "\u914D\u7F6E\u91CD\u7F6E\u5931\u8D25\uFF0C\u5931\u8D25\u539F\u56E0\uFF1A" + err.message, error: err.message };
              return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
            }
          } else if (request.method === "POST") {
            if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/config.json") {
              try {
                const newConfig = await request.json();
                if (!newConfig.UUID || !newConfig.HOST) return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                await env.KV.put("config.json", JSON.stringify(newConfig, null, 2));
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/cf.json") {
              try {
                const newConfig = await request.json();
                const CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
                if (!newConfig.init || newConfig.init !== true) {
                  if (newConfig.Email && newConfig.GlobalAPIKey) {
                    CF_JSON.Email = newConfig.Email;
                    CF_JSON.GlobalAPIKey = newConfig.GlobalAPIKey;
                  } else if (newConfig.AccountID && newConfig.APIToken) {
                    CF_JSON.AccountID = newConfig.AccountID;
                    CF_JSON.APIToken = newConfig.APIToken;
                  } else if (newConfig.UsageAPI) {
                    CF_JSON.UsageAPI = newConfig.UsageAPI;
                  } else {
                    return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                  }
                }
                await env.KV.put("cf.json", JSON.stringify(CF_JSON, null, 2));
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/tg.json") {
              try {
                const newConfig = await request.json();
                if (newConfig.init && newConfig.init === true) {
                  const TG_JSON = { BotToken: null, ChatID: null };
                  await env.KV.put("tg.json", JSON.stringify(TG_JSON, null, 2));
                } else {
                  if (!newConfig.BotToken || !newConfig.ChatID) return new Response(JSON.stringify({ error: "\u914D\u7F6E\u4E0D\u5B8C\u6574" }), { status: 400, headers: { "Content-Type": "application/json;charset=utf-8" } });
                  await env.KV.put("tg.json", JSON.stringify(newConfig, null, 2));
                }
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Config", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u914D\u7F6E\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u914D\u7F6E\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/ADD.txt") {
              try {
                const customIPs = await request.text();
                await env.KV.put("ADD.txt", customIPs);
                ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Save_Custom_IPs", config_JSON));
                return new Response(JSON.stringify({ success: true, message: "\u81EA\u5B9A\u4E49IP\u5DF2\u4FDD\u5B58" }), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
              } catch (error) {
                console.error("\u4FDD\u5B58\u81EA\u5B9A\u4E49IP\u5931\u8D25:", error);
                return new Response(JSON.stringify({ error: "\u4FDD\u5B58\u81EA\u5B9A\u4E49IP\u5931\u8D25: " + error.message }), { status: 500, headers: { "Content-Type": "application/json;charset=utf-8" } });
              }
            } else return new Response(JSON.stringify({ error: "\u4E0D\u652F\u6301\u7684POST\u8BF7\u6C42\u8DEF\u5F84" }), { status: 404, headers: { "Content-Type": "application/json;charset=utf-8" } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/config.json") {
            return new Response(JSON.stringify(config_JSON, null, 2), { status: 200, headers: { "Content-Type": "application/json" } });
          } else if (\u533A\u5206\u5927\u5C0F\u5199\u8BBF\u95EE\u8DEF\u5F84 === "admin/ADD.txt") {
            let \u672C\u5730\u4F18\u9009IP = await env.KV.get("ADD.txt") || "null";
            if (\u672C\u5730\u4F18\u9009IP == "null") \u672C\u5730\u4F18\u9009IP = (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[1];
            return new Response(\u672C\u5730\u4F18\u9009IP, { status: 200, headers: { "Content-Type": "text/plain;charset=utf-8", "asn": request.cf.asn } });
          } else if (\u8BBF\u95EE\u8DEF\u5F84 === "admin/cf.json") {
            return new Response(JSON.stringify(request.cf, null, 2), { status: 200, headers: { "Content-Type": "application/json;charset=utf-8" } });
          }
          ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Admin_Login", config_JSON));
          return 静态页面响应(env, "admin", url.search);
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "logout" || uuidRegex.test(\u8BBF\u95EE\u8DEF\u5F84)) {
          const \u54CD\u5E94 = new Response("\u91CD\u5B9A\u5411\u4E2D...", { status: 302, headers: { "Location": "/login" } });
          \u54CD\u5E94.headers.set("Set-Cookie", "auth=; Path=/; Max-Age=0; HttpOnly");
          return \u54CD\u5E94;
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "sub") {
          const \u8BA2\u9605TOKEN = await MD5MD5(host + userID), \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668 = ["1", "true"].includes(env.BEST_SUB) && url.searchParams.get("host") === "example.com" && url.searchParams.get("uuid") === "00000000-0000-4000-8000-000000000000" && UA.toLowerCase().includes("tunnel (https://github.com/cmliu/edge");
          const \u8BF7\u6C42TOKEN = url.searchParams.get("token");
          const \u7528\u6237\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8BA2\u9605 = \u8BF7\u6C42TOKEN === \u8BA2\u9605TOKEN;
          const \u5F53\u524D\u65E5\u5E8F\u53F7 = Math.floor(Date.now() / 864e5);
          const \u8BA2\u9605\u8F6C\u6362\u540E\u7AEFTOKEN\u79CD\u5B50 = base64SecretEncode(\u8BA2\u9605TOKEN, userID);
          const [\u4ECA\u65E5\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u4E13\u5C5ETOKEN, \u6628\u65E5\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u4E13\u5C5ETOKEN] = await Promise.all([
            MD5MD5(\u8BA2\u9605\u8F6C\u6362\u540E\u7AEFTOKEN\u79CD\u5B50 + \u5F53\u524D\u65E5\u5E8F\u53F7),
            MD5MD5(\u8BA2\u9605\u8F6C\u6362\u540E\u7AEFTOKEN\u79CD\u5B50 + (\u5F53\u524D\u65E5\u5E8F\u53F7 - 1))
          ]);
          const \u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u8BF7\u6C42\u8BA2\u9605 = \u8BF7\u6C42TOKEN === \u4ECA\u65E5\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u4E13\u5C5ETOKEN || \u8BF7\u6C42TOKEN === \u6628\u65E5\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u4E13\u5C5ETOKEN;
          if (\u7528\u6237\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8BA2\u9605 || \u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u8BF7\u6C42\u8BA2\u9605 || \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668) {
            config_JSON = await \u8BFB\u53D6config_JSON(env, host, userID, UA);
            if (\u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668) ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Get_Best_SUB", config_JSON, false));
            else ctx.waitUntil(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, "Get_SUB", config_JSON));
            const ua = UA.toLowerCase();
            const responseHeaders = {
              "content-type": "text/plain; charset=utf-8",
              "Profile-Update-Interval": config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBUpdateTime,
              "Profile-web-page-url": url.protocol + "//" + url.host + "/admin",
              "Cache-Control": "no-store"
            };
            if (config_JSON.CF.Usage.success) {
              const pagesSum = config_JSON.CF.Usage.pages;
              const workersSum = config_JSON.CF.Usage.workers;
              const total = Number.isFinite(config_JSON.CF.Usage.max) ? config_JSON.CF.Usage.max / 1e3 * 1024 : 1024 * 100;
              responseHeaders["Subscription-Userinfo"] = `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=4102329600`;
            }
            const isSubConverterRequest = url.searchParams.has("b64") || url.searchParams.has("base64") || request.headers.get("subconverter-request") || request.headers.get("subconverter-version") || ua.includes("subconverter") || ua.includes("CF-Workers-SUB".toLowerCase()) || \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668;
            const \u8BA2\u9605\u7C7B\u578B = isSubConverterRequest ? "mixed" : url.searchParams.has("target") ? url.searchParams.get("target") : url.searchParams.has("clash") || ua.includes("clash") || ua.includes("meta") || ua.includes("mihomo") ? "clash" : url.searchParams.has("sb") || url.searchParams.has("singbox") || ua.includes("singbox") || ua.includes("sing-box") ? "singbox" : url.searchParams.has("surge") || ua.includes("surge") ? "surge&ver=4" : url.searchParams.has("quanx") || ua.includes("quantumult") ? "quanx" : url.searchParams.has("loon") || ua.includes("loon") ? "loon" : "mixed";
            if (!ua.includes("mozilla")) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME)}`;
            const \u534F\u8BAE\u7C7B\u578B = (url.searchParams.has("surge") || ua.includes("surge")) && config_JSON.\u534F\u8BAE\u7C7B\u578B !== "ss" ? "trojan" : config_JSON.\u534F\u8BAE\u7C7B\u578B;
            let \u8BA2\u9605\u5185\u5BB9 = "";
            if (\u8BA2\u9605\u7C7B\u578B === "mixed") {
              const TLS\u5206\u7247\u53C2\u6570 = config_JSON.TLS\u5206\u7247 == "Shadowrocket" ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}` : config_JSON.TLS\u5206\u7247 == "Happ" ? `&fragment=${encodeURIComponent("3,1,tlshello")}` : "";
              let \u5B8C\u6574\u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9LINK = "", \u53CD\u4EE3IP\u6C60 = [];
              if (!url.searchParams.has("sub") && config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.local) {
                const \u5B8C\u6574\u4F18\u9009\u5217\u8868 = config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673AIP ? (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[0] : await env.KV.get("ADD.txt") ? await \u6574\u7406\u6210\u6570\u7EC4(await env.KV.get("ADD.txt")) : (await \u751F\u6210\u968F\u673AIP(request, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u968F\u673A\u6570\u91CF, config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.\u672C\u5730IP\u5E93.\u6307\u5B9A\u7AEF\u53E3))[0];
                const \u4F18\u9009API = [], \u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9 = [];
                for (const \u5143\u7D20 of \u5B8C\u6574\u4F18\u9009\u5217\u8868) {
                  if (\u5143\u7D20.toLowerCase().startsWith("sub://")) {
                    \u4F18\u9009API.push(\u5143\u7D20);
                  } else {
                    const \u5907\u6CE8\u4F4D\u7F6E = \u5143\u7D20.indexOf("#");
                    const \u5730\u5740\u90E8\u5206 = \u5907\u6CE8\u4F4D\u7F6E > -1 ? \u5143\u7D20.slice(0, \u5907\u6CE8\u4F4D\u7F6E) : \u5143\u7D20;
                    const \u5907\u6CE8\u90E8\u5206 = \u5907\u6CE8\u4F4D\u7F6E > -1 ? \u5143\u7D20.slice(\u5907\u6CE8\u4F4D\u7F6E) : "";
                    const subMatch = \u5143\u7D20.match(/sub\s*=\s*([^\s&#]+)/i);
                    if (subMatch && subMatch[1].trim().includes(".")) {
                      const \u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP = \u5143\u7D20.toLowerCase().includes("proxyip=true");
                      if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u4F18\u9009API.push("sub://" + subMatch[1].trim() + "?proxyip=true" + (\u5143\u7D20.includes("#") ? "#" + \u5143\u7D20.split("#")[1] : ""));
                      else \u4F18\u9009API.push("sub://" + subMatch[1].trim() + (\u5143\u7D20.includes("#") ? "#" + \u5143\u7D20.split("#")[1] : ""));
                    } else if (\u5730\u5740\u90E8\u5206.toLowerCase().startsWith("https://")) {
                      \u4F18\u9009API.push(\u5143\u7D20);
                    } else if (\u5730\u5740\u90E8\u5206.toLowerCase().includes("://")) {
                      if (\u5143\u7D20.includes("#")) {
                        const \u5730\u5740\u5907\u6CE8\u5206\u79BB = \u5143\u7D20.split("#");
                        \u5176\u4ED6\u8282\u70B9.push(\u5730\u5740\u5907\u6CE8\u5206\u79BB[0] + "#" + encodeURIComponent(decodeURIComponent(\u5730\u5740\u5907\u6CE8\u5206\u79BB[1])));
                      } else \u5176\u4ED6\u8282\u70B9.push(\u5143\u7D20);
                    } else {
                      if (\u5730\u5740\u90E8\u5206.includes("*")) {
                        \u4F18\u9009IP.push(\u66FF\u6362\u661F\u53F7\u4E3A\u968F\u673A\u5B57\u7B26(\u5730\u5740\u90E8\u5206) + \u5907\u6CE8\u90E8\u5206);
                      } else \u4F18\u9009IP.push(\u5143\u7D20);
                    }
                  }
                }
                const \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9 = await \u8BF7\u6C42\u4F18\u9009API(\u4F18\u9009API, "443");
                const \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4 = [...new Set(\u5176\u4ED6\u8282\u70B9.concat(\u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[1]))];
                \u5176\u4ED6\u8282\u70B9LINK = \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4.length > 0 ? \u5408\u5E76\u5176\u4ED6\u8282\u70B9\u6570\u7EC4.join("\n") + "\n" : "";
                const \u4F18\u9009API\u7684IP = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[0];
                \u53CD\u4EE3IP\u6C60 = \u8BF7\u6C42\u4F18\u9009API\u5185\u5BB9[3] || [];
                \u5B8C\u6574\u4F18\u9009IP = [...new Set(\u4F18\u9009IP.concat(\u4F18\u9009API\u7684IP))];
              } else {
                let \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST = url.searchParams.get("sub") || config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUB;
                const [\u4F18\u9009\u751F\u6210\u5668IP\u6570\u7EC4, \u4F18\u9009\u751F\u6210\u5668\u5176\u4ED6\u8282\u70B9] = await \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST);
                \u5B8C\u6574\u4F18\u9009IP = \u5B8C\u6574\u4F18\u9009IP.concat(\u4F18\u9009\u751F\u6210\u5668IP\u6570\u7EC4);
                \u5176\u4ED6\u8282\u70B9LINK += \u4F18\u9009\u751F\u6210\u5668\u5176\u4ED6\u8282\u70B9;
              }
              const ECHLINK\u53C2\u6570 = config_JSON.ECH ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}` : "";
              const isLoonOrSurge = ua.includes("loon") || ua.includes("surge");
              const { type: \u4F20\u8F93\u534F\u8BAE, \u8DEF\u5F84\u5B57\u6BB5\u540D, \u57DF\u540D\u5B57\u6BB5\u540D } = \u83B7\u53D6\u4F20\u8F93\u534F\u8BAE\u914D\u7F6E(config_JSON);
              \u8BA2\u9605\u5185\u5BB9 = \u5176\u4ED6\u8282\u70B9LINK + \u5B8C\u6574\u4F18\u9009IP.map((\u539F\u59CB\u5730\u5740) => {
                const regex = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
                const match = \u539F\u59CB\u5730\u5740.match(regex);
                let \u8282\u70B9\u5730\u5740, \u8282\u70B9\u7AEF\u53E3 = "443", \u8282\u70B9\u5907\u6CE8;
                if (match) {
                  \u8282\u70B9\u5730\u5740 = match[1];
                  \u8282\u70B9\u7AEF\u53E3 = match[2] ? match[2] : "443";
                  \u8282\u70B9\u5907\u6CE8 = match[3] || \u8282\u70B9\u5730\u5740;
                } else {
                  console.warn(`[\u8BA2\u9605\u5185\u5BB9] \u4E0D\u89C4\u8303\u7684IP\u683C\u5F0F\u5DF2\u5FFD\u7565: ${\u539F\u59CB\u5730\u5740}`);
                  return null;
                }
                let \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84;
                const \u94FE\u5F0F\u4EE3\u7406\u5339\u914D = \u8282\u70B9\u5907\u6CE8.match(/\$(socks5|http|https|turn|sstp):\/\/([^#\s]+)/i);
                if (\u94FE\u5F0F\u4EE3\u7406\u5339\u914D) {
                  try {
                    const \u4EE3\u7406\u534F\u8BAE = \u94FE\u5F0F\u4EE3\u7406\u5339\u914D[1].toLowerCase(), \u4EE3\u7406\u53C2\u6570 = \u94FE\u5F0F\u4EE3\u7406\u5339\u914D[2];
                    const \u94FE\u5F0F\u4EE3\u7406\u6570\u636E = { type: \u4EE3\u7406\u534F\u8BAE, ...\u83B7\u53D6SOCKS5\u8D26\u53F7(\u4EE3\u7406\u53C2\u6570, \u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3(\u4EE3\u7406\u534F\u8BAE)) };
                    \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = `/video/${base64SecretEncode(JSON.stringify(\u94FE\u5F0F\u4EE3\u7406\u6570\u636E), userID) + (config_JSON.\u542F\u75280RTT ? "?ed=2560" : "")}`;
                    \u8282\u70B9\u5907\u6CE8 = \u8282\u70B9\u5907\u6CE8.replace(\u94FE\u5F0F\u4EE3\u7406\u5339\u914D[0], "").trim() || \u8282\u70B9\u5730\u5740;
                  } catch (error) {
                    console.warn(`[\u8BA2\u9605\u5185\u5BB9] \u94FE\u5F0F\u4EE3\u7406\u89E3\u6790\u5931\u8D25\uFF0C\u5DF2\u5FFD\u7565\u8BE5\u6307\u4EE4: ${\u94FE\u5F0F\u4EE3\u7406\u5339\u914D[0]} (${error && error.message ? error.message : error})`);
                  }
                } else if (\u53CD\u4EE3IP\u6C60.length > 0) {
                  const \u5339\u914D\u5230\u7684\u53CD\u4EE3IP = \u53CD\u4EE3IP\u6C60.find((p) => p.includes(\u8282\u70B9\u5730\u5740));
                  if (\u5339\u914D\u5230\u7684\u53CD\u4EE3IP) \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = `${config_JSON.PATH}/proxyip=${\u5339\u914D\u5230\u7684\u53CD\u4EE3IP}`.replace(/\/\//g, "/") + (config_JSON.\u542F\u75280RTT ? "?ed=2560" : "");
                }
                if (isLoonOrSurge) \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace(/,/g, "%2C");
                if (\u534F\u8BAE\u7C7B\u578B === "ss" && !\u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668) {
                  if (!config_JSON.SS.TLS) {
                    const TLS\u7AEF\u53E3 = [443, 2053, 2083, 2087, 2096, 8443];
                    const NOTLS\u7AEF\u53E3 = [80, 2052, 2082, 2086, 2095, 8080];
                    \u8282\u70B9\u7AEF\u53E3 = String(NOTLS\u7AEF\u53E3[TLS\u7AEF\u53E3.indexOf(Number(\u8282\u70B9\u7AEF\u53E3))] ?? \u8282\u70B9\u7AEF\u53E3);
                  }
                  \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = (\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.includes("?") ? \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace("?", "?enc=" + config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F + "&") : \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 + "?enc=" + config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F).replace(/([=,])/g, "\\$1");
                  if (!isSubConverterRequest) \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 + ";mux=0";
                  return `${\u534F\u8BAE\u7C7B\u578B}://${btoa(config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F + ":00000000-0000-4000-8000-000000000000")}@${\u8282\u70B9\u5730\u5740}:${\u8282\u70B9\u7AEF\u53E3}?plugin=v2${encodeURIComponent("ray-plugin;mode=websocket;host=example.com;path=" + (config_JSON.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) : \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) + (config_JSON.SS.TLS ? ";tls" : "")) + ECHLINK\u53C2\u6570 + TLS\u5206\u7247\u53C2\u6570}#${encodeURIComponent(\u8282\u70B9\u5907\u6CE8)}`;
                } else {
                  const \u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C = \u83B7\u53D6\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C(config_JSON, \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84, \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668);
                  return `${\u534F\u8BAE\u7C7B\u578B}://00000000-0000-4000-8000-000000000000@${\u8282\u70B9\u5730\u5740}:${\u8282\u70B9\u7AEF\u53E3}?security=tls&type=${\u4F20\u8F93\u534F\u8BAE + ECHLINK\u53C2\u6570}&${\u57DF\u540D\u5B57\u6BB5\u540D}=example.com&fp=${config_JSON.Fingerprint}&sni=example.com&${\u8DEF\u5F84\u5B57\u6BB5\u540D}=${encodeURIComponent(\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C) + TLS\u5206\u7247\u53C2\u6570}&encryption=none${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1 ? "&insecure=1&allowInsecure=1" : ""}#${encodeURIComponent(\u8282\u70B9\u5907\u6CE8)}`;
                }
              }).filter((item) => item !== null).join("\n");
            } else {
              const \u8BA2\u9605\u8F6C\u6362URL = `${config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBAPI}/sub?target=${\u8BA2\u9605\u7C7B\u578B}&url=${encodeURIComponent(url.protocol + "//" + url.host + "/sub?target=mixed&token=" + \u4ECA\u65E5\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u4E13\u5C5ETOKEN + "&asOrg=" + \u8BC6\u522B\u8FD0\u8425\u5546(request) + (url.searchParams.has("sub") && url.searchParams.get("sub") != "" ? `&sub=${url.searchParams.get("sub")}` : ""))}&config=${encodeURIComponent(config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBCONFIG)}&emoji=${config_JSON.\u8BA2\u9605\u8F6C\u6362\u914D\u7F6E.SUBEMOJI}&scv=${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}`;
              try {
                const response = await fetch(\u8BA2\u9605\u8F6C\u6362URL, { headers: { "User-Agent": "Subconverter for " + \u8BA2\u9605\u7C7B\u578B + " edgetunnel (https://github.com/cmliu/edgetunnel)" } });
                if (response.ok) {
                  \u8BA2\u9605\u5185\u5BB9 = await response.text();
                  if (url.searchParams.has("surge") || ua.includes("surge")) \u8BA2\u9605\u5185\u5BB9 = Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, url.protocol + "//" + url.host + "/sub?token=" + \u8BA2\u9605TOKEN + "&surge", config_JSON);
                } else return new Response("\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u5F02\u5E38\uFF1A" + response.statusText, { status: response.status });
              } catch (error) {
                return new Response("\u8BA2\u9605\u8F6C\u6362\u540E\u7AEF\u5F02\u5E38\uFF1A" + error.message, { status: 403 });
              }
            }
            if (!ua.includes("subconverter") && \u7528\u6237\u5BA2\u6237\u7AEF\u8BF7\u6C42\u8BA2\u9605) {
              const \u6253\u4E71\u540EHOSTS = [...config_JSON.HOSTS].sort(() => Math.random() - 0.5);
              let \u66FF\u6362\u57DF\u540D\u8BA1\u6570 = 0, \u5F53\u524D\u968F\u673AHOST = null;
              \u8BA2\u9605\u5185\u5BB9 = \u8BA2\u9605\u5185\u5BB9.replace(/00000000-0000-4000-8000-000000000000/g, config_JSON.UUID).replace(/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g, btoa(config_JSON.UUID)).replace(/example\.com/g, () => {
                if (\u66FF\u6362\u57DF\u540D\u8BA1\u6570 % 2 === 0) {
                  const \u539F\u59CBhost = \u6253\u4E71\u540EHOSTS[Math.floor(\u66FF\u6362\u57DF\u540D\u8BA1\u6570 / 2) % \u6253\u4E71\u540EHOSTS.length];
                  \u5F53\u524D\u968F\u673AHOST = \u66FF\u6362\u661F\u53F7\u4E3A\u968F\u673A\u5B57\u7B26(\u539F\u59CBhost);
                }
                \u66FF\u6362\u57DF\u540D\u8BA1\u6570++;
                return \u5F53\u524D\u968F\u673AHOST;
              });
            }
            if (\u8BA2\u9605\u7C7B\u578B === "mixed" && (!ua.includes("mozilla") || url.searchParams.has("b64") || url.searchParams.has("base64"))) \u8BA2\u9605\u5185\u5BB9 = btoa(\u8BA2\u9605\u5185\u5BB9);
            if (\u8BA2\u9605\u7C7B\u578B === "singbox") {
              \u8BA2\u9605\u5185\u5BB9 = await Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, config_JSON);
              responseHeaders["content-type"] = "application/json; charset=utf-8";
            } else if (\u8BA2\u9605\u7C7B\u578B === "clash") {
              \u8BA2\u9605\u5185\u5BB9 = Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(\u8BA2\u9605\u5185\u5BB9, config_JSON);
              responseHeaders["content-type"] = "application/x-yaml; charset=utf-8";
            }
            return new Response(\u8BA2\u9605\u5185\u5BB9, { status: 200, headers: responseHeaders });
          }
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "locations") {
          const cookies = request.headers.get("Cookie") || "";
          const authCookie = cookies.split(";").find((c) => c.trim().startsWith("auth="))?.split("=")[1];
          if (authCookie && authCookie == await MD5MD5(UA + \u52A0\u5BC6\u79D8\u94A5 + \u7BA1\u7406\u5458\u5BC6\u7801)) return fetch(new Request("https://speed.cloudflare.com/locations", { headers: { "Referer": "https://speed.cloudflare.com/" } }));
        } else if (\u8BBF\u95EE\u8DEF\u5F84 === "robots.txt") return new Response("User-agent: *\nDisallow: /", { status: 200, headers: { "Content-Type": "text/plain; charset=UTF-8" } });
      } else if (!envUUID) return 静态页面响应(env, "noKV").then((r) => {
        const headers = new Headers(r.headers);
        headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        headers.set("Pragma", "no-cache");
        headers.set("Expires", "0");
        return new Response(r.body, { status: 404, statusText: r.statusText, headers });
      });
    }
    let \u4F2A\u88C5\u9875URL = env.URL || "nginx";
    if (\u4F2A\u88C5\u9875URL && \u4F2A\u88C5\u9875URL !== "nginx" && \u4F2A\u88C5\u9875URL !== "1101") {
      \u4F2A\u88C5\u9875URL = \u4F2A\u88C5\u9875URL.trim().replace(/\/$/, "");
      if (!\u4F2A\u88C5\u9875URL.match(/^https?:\/\//i)) \u4F2A\u88C5\u9875URL = "https://" + \u4F2A\u88C5\u9875URL;
      if (\u4F2A\u88C5\u9875URL.toLowerCase().startsWith("http://")) \u4F2A\u88C5\u9875URL = "https://" + \u4F2A\u88C5\u9875URL.substring(7);
      try {
        const u = new URL(\u4F2A\u88C5\u9875URL);
        \u4F2A\u88C5\u9875URL = u.protocol + "//" + u.host;
      } catch (e) {
        \u4F2A\u88C5\u9875URL = "nginx";
      }
    }
    if (\u4F2A\u88C5\u9875URL === "1101") return new Response(await html1101(url.host, \u8BBF\u95EEIP), { status: 200, headers: { "Content-Type": "text/html; charset=UTF-8" } });
    try {
      const \u53CD\u4EE3URL = new URL(\u4F2A\u88C5\u9875URL), \u65B0\u8BF7\u6C42\u5934 = new Headers(request.headers);
      \u65B0\u8BF7\u6C42\u5934.set("Host", \u53CD\u4EE3URL.host);
      \u65B0\u8BF7\u6C42\u5934.set("Referer", \u53CD\u4EE3URL.origin);
      \u65B0\u8BF7\u6C42\u5934.set("Origin", \u53CD\u4EE3URL.origin);
      if (!\u65B0\u8BF7\u6C42\u5934.has("User-Agent") && UA && UA !== "null") \u65B0\u8BF7\u6C42\u5934.set("User-Agent", UA);
      const \u53CD\u4EE3\u54CD\u5E94 = await fetch(\u53CD\u4EE3URL.origin + url.pathname + url.search, { method: request.method, headers: \u65B0\u8BF7\u6C42\u5934, body: request.body, cf: request.cf });
      const \u5185\u5BB9\u7C7B\u578B = \u53CD\u4EE3\u54CD\u5E94.headers.get("content-type") || "";
      if (/text|javascript|json|xml/.test(\u5185\u5BB9\u7C7B\u578B)) {
        const \u54CD\u5E94\u5185\u5BB9 = (await \u53CD\u4EE3\u54CD\u5E94.text()).replaceAll(\u53CD\u4EE3URL.host, url.host);
        return new Response(\u54CD\u5E94\u5185\u5BB9, { status: \u53CD\u4EE3\u54CD\u5E94.status, headers: { ...Object.fromEntries(\u53CD\u4EE3\u54CD\u5E94.headers), "Cache-Control": "no-store" } });
      }
      return \u53CD\u4EE3\u54CD\u5E94;
    } catch (error) {
    }
    return new Response(await nginx(), { status: 200, headers: { "Content-Type": "text/html; charset=UTF-8" } });
  }
};
async function \u5904\u7406XHTTP\u8BF7\u6C42(request, yourUUID) {
  if (!request.body) return new Response("Bad Request", { status: 400 });
  const reader = request.body.getReader();
  const \u9996\u5305 = await \u8BFB\u53D6XHTTP\u9996\u5305(reader, yourUUID);
  if (!\u9996\u5305) {
    try {
      reader.releaseLock();
    } catch (e) {
    }
    return new Response("Invalid request", { status: 400 });
  }
  if (isSpeedTestSite(\u9996\u5305.hostname)) {
    try {
      reader.releaseLock();
    } catch (e) {
    }
    return new Response("Forbidden", { status: 403 });
  }
  if (\u9996\u5305.isUDP && \u9996\u5305.\u534F\u8BAE !== "trojan" && \u9996\u5305.port !== 53) {
    try {
      reader.releaseLock();
    } catch (e) {
    }
    return new Response("UDP is not supported", { status: 400 });
  }
  const remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null };
  let \u5F53\u524D\u5199\u5165Socket = null;
  let \u8FDC\u7AEF\u5199\u5165\u5668 = null;
  const responseHeaders = new Headers({
    "Content-Type": "application/octet-stream",
    "X-Accel-Buffering": "no",
    "Cache-Control": "no-store"
  });
  const \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668 = /* @__PURE__ */ __name(() => {
    if (\u8FDC\u7AEF\u5199\u5165\u5668) {
      try {
        \u8FDC\u7AEF\u5199\u5165\u5668.releaseLock();
      } catch (e) {
      }
      \u8FDC\u7AEF\u5199\u5165\u5668 = null;
    }
    \u5F53\u524D\u5199\u5165Socket = null;
  }, "\u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668");
  const \u83B7\u53D6\u8FDC\u7AEF\u5199\u5165\u5668 = /* @__PURE__ */ __name(() => {
    const socket = remoteConnWrapper.socket;
    if (!socket) return null;
    if (socket !== \u5F53\u524D\u5199\u5165Socket) {
      \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
      \u5F53\u524D\u5199\u5165Socket = socket;
      \u8FDC\u7AEF\u5199\u5165\u5668 = socket.writable.getWriter();
    }
    return \u8FDC\u7AEF\u5199\u5165\u5668;
  }, "\u83B7\u53D6\u8FDC\u7AEF\u5199\u5165\u5668");
  let XHTTP\u4E0A\u884C\u5199\u5165\u961F\u5217 = null;
  return new Response(new ReadableStream({
    async start(controller) {
      let \u5DF2\u5173\u95ED = false;
      let udpRespHeader = \u9996\u5305.respHeader;
      const \u6728\u9A6CUDP\u4E0A\u4E0B\u6587 = { \u7F13\u5B58: new Uint8Array(0) };
      const xhttpBridge = {
        readyState: WebSocket.OPEN,
        send(data) {
          if (\u5DF2\u5173\u95ED) return;
          try {
            const chunk = data instanceof Uint8Array ? data : data instanceof ArrayBuffer ? new Uint8Array(data) : ArrayBuffer.isView(data) ? new Uint8Array(data.buffer, data.byteOffset, data.byteLength) : new Uint8Array(data);
            controller.enqueue(chunk);
          } catch (e) {
            \u5DF2\u5173\u95ED = true;
            this.readyState = WebSocket.CLOSED;
          }
        },
        close() {
          if (\u5DF2\u5173\u95ED) return;
          \u5DF2\u5173\u95ED = true;
          this.readyState = WebSocket.CLOSED;
          try {
            controller.close();
          } catch (e) {
          }
        }
      };
      const \u4E0A\u884C\u5199\u5165\u961F\u5217 = XHTTP\u4E0A\u884C\u5199\u5165\u961F\u5217 = \u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217({
        \u83B7\u53D6\u5199\u5165\u5668: \u83B7\u53D6\u8FDC\u7AEF\u5199\u5165\u5668,
        \u91CA\u653E\u5199\u5165\u5668: \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668,
        \u91CD\u8BD5\u8FDE\u63A5: /* @__PURE__ */ __name(async () => {
          if (typeof remoteConnWrapper.retryConnect !== "function") throw new Error("retry unavailable");
          await remoteConnWrapper.retryConnect();
        }, "\u91CD\u8BD5\u8FDE\u63A5"),
        \u5173\u95ED\u8FDE\u63A5: /* @__PURE__ */ __name(() => {
          try {
            remoteConnWrapper.socket?.close();
          } catch (e) {
          }
          closeSocketQuietly(xhttpBridge);
        }, "\u5173\u95ED\u8FDE\u63A5"),
        \u540D\u79F0: "XHTTP\u4E0A\u884C"
      });
      const \u5199\u5165\u8FDC\u7AEF = /* @__PURE__ */ __name(async (payload, allowRetry = true) => {
        return \u4E0A\u884C\u5199\u5165\u961F\u5217.\u5199\u5165\u5E76\u7B49\u5F85(payload, allowRetry);
      }, "\u5199\u5165\u8FDC\u7AEF");
      try {
        if (\u9996\u5305.isUDP) {
          if (\u9996\u5305.rawData?.byteLength) {
            if (\u9996\u5305.\u534F\u8BAE === "trojan") await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(\u9996\u5305.rawData, xhttpBridge, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
            else await forwardataudp(\u9996\u5305.rawData, xhttpBridge, udpRespHeader, request);
            udpRespHeader = null;
          }
        } else {
          await forwardataTCP(\u9996\u5305.hostname, \u9996\u5305.port, \u9996\u5305.rawData, xhttpBridge, \u9996\u5305.respHeader, remoteConnWrapper, yourUUID, request);
        }
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (!value || value.byteLength === 0) continue;
          if (\u9996\u5305.isUDP) {
            if (\u9996\u5305.\u534F\u8BAE === "trojan") await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(value, xhttpBridge, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
            else await forwardataudp(value, xhttpBridge, udpRespHeader, request);
            udpRespHeader = null;
          } else {
            if (!await \u5199\u5165\u8FDC\u7AEF(value)) throw new Error("Remote socket is not ready");
          }
        }
        if (!\u9996\u5305.isUDP) {
          await \u4E0A\u884C\u5199\u5165\u961F\u5217.\u7B49\u5F85\u7A7A();
          const writer = \u83B7\u53D6\u8FDC\u7AEF\u5199\u5165\u5668();
          if (writer) {
            try {
              await writer.close();
            } catch (e) {
            }
          }
        }
      } catch (err) {
        log(`[XHTTP\u8F6C\u53D1] \u5904\u7406\u5931\u8D25: ${err?.message || err}`);
        closeSocketQuietly(xhttpBridge);
      } finally {
        \u4E0A\u884C\u5199\u5165\u961F\u5217.\u6E05\u7A7A();
        \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
        try {
          reader.releaseLock();
        } catch (e) {
        }
      }
    },
    cancel() {
      XHTTP\u4E0A\u884C\u5199\u5165\u961F\u5217?.\u6E05\u7A7A();
      try {
        remoteConnWrapper.socket?.close();
      } catch (e) {
      }
      \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
      try {
        reader.releaseLock();
      } catch (e) {
      }
    }
  }), { status: 200, headers: responseHeaders });
}
__name(\u5904\u7406XHTTP\u8BF7\u6C42, "\u5904\u7406XHTTP\u8BF7\u6C42");
function \u6709\u6548\u6570\u636E\u957F\u5EA6(data) {
  if (!data) return 0;
  if (typeof data.byteLength === "number") return data.byteLength;
  if (typeof data.length === "number") return data.length;
  return 0;
}
__name(\u6709\u6548\u6570\u636E\u957F\u5EA6, "\u6709\u6548\u6570\u636E\u957F\u5EA6");
async function \u8BFB\u53D6XHTTP\u9996\u5305(reader, token) {
  const decoder = VLESS\u6587\u672C\u89E3\u7801\u5668;
  const \u5C1D\u8BD5\u89E3\u6790\u9B4F\u70C8\u601D\u9996\u5305 = /* @__PURE__ */ __name((data) => {
    const length = data.byteLength;
    if (length < 18) return { \u72B6\u6001: "need_more" };
    if (!UUID\u5B57\u8282\u5339\u914D(data, 1, token)) return { \u72B6\u6001: "invalid" };
    const optLen = data[17];
    const cmdIndex = 18 + optLen;
    if (length < cmdIndex + 1) return { \u72B6\u6001: "need_more" };
    const cmd = data[cmdIndex];
    if (cmd !== 1 && cmd !== 2) return { \u72B6\u6001: "invalid" };
    const portIndex = cmdIndex + 1;
    if (length < portIndex + 3) return { \u72B6\u6001: "need_more" };
    const port = data[portIndex] << 8 | data[portIndex + 1];
    const addressType = data[portIndex + 2];
    const addressIndex = portIndex + 3;
    let headerLen = -1;
    let hostname = "";
    if (addressType === 1) {
      if (length < addressIndex + 4) return { \u72B6\u6001: "need_more" };
      hostname = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
      headerLen = addressIndex + 4;
    } else if (addressType === 2) {
      if (length < addressIndex + 1) return { \u72B6\u6001: "need_more" };
      const domainLen = data[addressIndex];
      if (length < addressIndex + 1 + domainLen) return { \u72B6\u6001: "need_more" };
      hostname = decoder.decode(data.subarray(addressIndex + 1, addressIndex + 1 + domainLen));
      headerLen = addressIndex + 1 + domainLen;
    } else if (addressType === 3) {
      if (length < addressIndex + 16) return { \u72B6\u6001: "need_more" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = addressIndex + i * 2;
        ipv6.push((data[base] << 8 | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      headerLen = addressIndex + 16;
    } else return { \u72B6\u6001: "invalid" };
    if (!hostname) return { \u72B6\u6001: "invalid" };
    return {
      \u72B6\u6001: "ok",
      \u7ED3\u679C: {
        \u534F\u8BAE: "vless",
        hostname,
        port,
        isUDP: cmd === 2,
        rawData: data.subarray(headerLen),
        respHeader: new Uint8Array([data[0], 0])
      }
    };
  }, "\u5C1D\u8BD5\u89E3\u6790\u9B4F\u70C8\u601D\u9996\u5305");
  const \u5C1D\u8BD5\u89E3\u6790\u6728\u9A6C\u9996\u5305 = /* @__PURE__ */ __name((data) => {
    const \u5BC6\u7801\u54C8\u5E0C = sha224(token);
    const \u5BC6\u7801\u54C8\u5E0C\u5B57\u8282 = new TextEncoder().encode(\u5BC6\u7801\u54C8\u5E0C);
    const length = data.byteLength;
    if (length < 58) return { \u72B6\u6001: "need_more" };
    if (data[56] !== 13 || data[57] !== 10) return { \u72B6\u6001: "invalid" };
    for (let i = 0; i < 56; i++) {
      if (data[i] !== \u5BC6\u7801\u54C8\u5E0C\u5B57\u8282[i]) return { \u72B6\u6001: "invalid" };
    }
    const socksStart = 58;
    if (length < socksStart + 2) return { \u72B6\u6001: "need_more" };
    const cmd = data[socksStart];
    if (cmd !== 1 && cmd !== 3) return { \u72B6\u6001: "invalid" };
    const isUDP = cmd === 3;
    const atype = data[socksStart + 1];
    let cursor = socksStart + 2;
    let hostname = "";
    if (atype === 1) {
      if (length < cursor + 4) return { \u72B6\u6001: "need_more" };
      hostname = `${data[cursor]}.${data[cursor + 1]}.${data[cursor + 2]}.${data[cursor + 3]}`;
      cursor += 4;
    } else if (atype === 3) {
      if (length < cursor + 1) return { \u72B6\u6001: "need_more" };
      const domainLen = data[cursor];
      if (length < cursor + 1 + domainLen) return { \u72B6\u6001: "need_more" };
      hostname = decoder.decode(data.subarray(cursor + 1, cursor + 1 + domainLen));
      cursor += 1 + domainLen;
    } else if (atype === 4) {
      if (length < cursor + 16) return { \u72B6\u6001: "need_more" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = cursor + i * 2;
        ipv6.push((data[base] << 8 | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      cursor += 16;
    } else return { \u72B6\u6001: "invalid" };
    if (!hostname) return { \u72B6\u6001: "invalid" };
    if (length < cursor + 4) return { \u72B6\u6001: "need_more" };
    const port = data[cursor] << 8 | data[cursor + 1];
    if (data[cursor + 2] !== 13 || data[cursor + 3] !== 10) return { \u72B6\u6001: "invalid" };
    const dataOffset = cursor + 4;
    return {
      \u72B6\u6001: "ok",
      \u7ED3\u679C: {
        \u534F\u8BAE: "trojan",
        hostname,
        port,
        isUDP,
        rawData: data.subarray(dataOffset),
        respHeader: null
      }
    };
  }, "\u5C1D\u8BD5\u89E3\u6790\u6728\u9A6C\u9996\u5305");
  let buffer = new Uint8Array(1024);
  let offset = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      if (offset === 0) return null;
      break;
    }
    const chunk = value instanceof Uint8Array ? value : new Uint8Array(value);
    if (offset + chunk.byteLength > buffer.byteLength) {
      const newBuffer = new Uint8Array(Math.max(buffer.byteLength * 2, offset + chunk.byteLength));
      newBuffer.set(buffer.subarray(0, offset));
      buffer = newBuffer;
    }
    buffer.set(chunk, offset);
    offset += chunk.byteLength;
    const \u5F53\u524D\u6570\u636E = buffer.subarray(0, offset);
    const \u6728\u9A6C\u7ED3\u679C = \u5C1D\u8BD5\u89E3\u6790\u6728\u9A6C\u9996\u5305(\u5F53\u524D\u6570\u636E);
    if (\u6728\u9A6C\u7ED3\u679C.\u72B6\u6001 === "ok") return { ...\u6728\u9A6C\u7ED3\u679C.\u7ED3\u679C, reader };
    const \u9B4F\u70C8\u601D\u7ED3\u679C = \u5C1D\u8BD5\u89E3\u6790\u9B4F\u70C8\u601D\u9996\u5305(\u5F53\u524D\u6570\u636E);
    if (\u9B4F\u70C8\u601D\u7ED3\u679C.\u72B6\u6001 === "ok") return { ...\u9B4F\u70C8\u601D\u7ED3\u679C.\u7ED3\u679C, reader };
    if (\u6728\u9A6C\u7ED3\u679C.\u72B6\u6001 === "invalid" && \u9B4F\u70C8\u601D\u7ED3\u679C.\u72B6\u6001 === "invalid") return null;
  }
  const \u6700\u7EC8\u6570\u636E = buffer.subarray(0, offset);
  const \u6700\u7EC8\u6728\u9A6C\u7ED3\u679C = \u5C1D\u8BD5\u89E3\u6790\u6728\u9A6C\u9996\u5305(\u6700\u7EC8\u6570\u636E);
  if (\u6700\u7EC8\u6728\u9A6C\u7ED3\u679C.\u72B6\u6001 === "ok") return { ...\u6700\u7EC8\u6728\u9A6C\u7ED3\u679C.\u7ED3\u679C, reader };
  const \u6700\u7EC8\u9B4F\u70C8\u601D\u7ED3\u679C = \u5C1D\u8BD5\u89E3\u6790\u9B4F\u70C8\u601D\u9996\u5305(\u6700\u7EC8\u6570\u636E);
  if (\u6700\u7EC8\u9B4F\u70C8\u601D\u7ED3\u679C.\u72B6\u6001 === "ok") return { ...\u6700\u7EC8\u9B4F\u70C8\u601D\u7ED3\u679C.\u7ED3\u679C, reader };
  return null;
}
__name(\u8BFB\u53D6XHTTP\u9996\u5305, "\u8BFB\u53D6XHTTP\u9996\u5305");
async function \u5904\u7406gRPC\u8BF7\u6C42(request, yourUUID) {
  if (!request.body) return new Response("Bad Request", { status: 400 });
  const reader = request.body.getReader();
  const remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null };
  let isDnsQuery = false;
  const \u6728\u9A6CUDP\u4E0A\u4E0B\u6587 = { \u7F13\u5B58: new Uint8Array(0) };
  let \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = null;
  let \u5F53\u524D\u5199\u5165Socket = null;
  let \u8FDC\u7AEF\u5199\u5165\u5668 = null;
  let GRPC\u4E0A\u884C\u5199\u5165\u961F\u5217 = null;
  const grpcHeaders = new Headers({
    "Content-Type": "application/grpc",
    "grpc-status": "0",
    "X-Accel-Buffering": "no",
    "Cache-Control": "no-store"
  });
  const \u4E0B\u884C\u7F13\u5B58\u4E0A\u9650 = \u4E0B\u884CGrain\u5305\u5B57\u8282;
  const \u4E0B\u884C\u5237\u65B0\u95F4\u9694 = Math.max(\u4E0B\u884CGrain\u9759\u9ED8\u6BEB\u79D2, 1);
  return new Response(new ReadableStream({
    async start(controller) {
      let \u5DF2\u5173\u95ED = false;
      let \u53D1\u9001\u961F\u5217 = [];
      let \u961F\u5217\u5B57\u8282\u6570 = 0;
      let \u5237\u65B0\u5B9A\u65F6\u5668 = null;
      let \u5237\u65B0Microtask\u5DF2\u6392\u961F = false;
      const grpcBridge = {
        readyState: WebSocket.OPEN,
        send(data) {
          if (\u5DF2\u5173\u95ED) return;
          const chunk = data instanceof Uint8Array ? data : new Uint8Array(data);
          const lenBytes\u6570\u7EC4 = [];
          let remaining = chunk.byteLength >>> 0;
          while (remaining > 127) {
            lenBytes\u6570\u7EC4.push(remaining & 127 | 128);
            remaining >>>= 7;
          }
          lenBytes\u6570\u7EC4.push(remaining);
          const lenBytes = new Uint8Array(lenBytes\u6570\u7EC4);
          const protobufLen = 1 + lenBytes.length + chunk.byteLength;
          const frame = new Uint8Array(5 + protobufLen);
          frame[0] = 0;
          frame[1] = protobufLen >>> 24 & 255;
          frame[2] = protobufLen >>> 16 & 255;
          frame[3] = protobufLen >>> 8 & 255;
          frame[4] = protobufLen & 255;
          frame[5] = 10;
          frame.set(lenBytes, 6);
          frame.set(chunk, 6 + lenBytes.length);
          \u53D1\u9001\u961F\u5217.push(frame);
          \u961F\u5217\u5B57\u8282\u6570 += frame.byteLength;
          \u5B89\u6392\u5237\u65B0\u53D1\u9001\u961F\u5217();
        },
        close() {
          if (this.readyState === WebSocket.CLOSED) return;
          \u5237\u65B0\u53D1\u9001\u961F\u5217(true);
          \u5DF2\u5173\u95ED = true;
          this.readyState = WebSocket.CLOSED;
          try {
            controller.close();
          } catch (e) {
          }
        }
      };
      const \u5237\u65B0\u53D1\u9001\u961F\u5217 = /* @__PURE__ */ __name((force = false) => {
        \u5237\u65B0Microtask\u5DF2\u6392\u961F = false;
        if (\u5237\u65B0\u5B9A\u65F6\u5668) {
          clearTimeout(\u5237\u65B0\u5B9A\u65F6\u5668);
          \u5237\u65B0\u5B9A\u65F6\u5668 = null;
        }
        if (!force && \u5DF2\u5173\u95ED || \u961F\u5217\u5B57\u8282\u6570 === 0) return;
        const out = new Uint8Array(\u961F\u5217\u5B57\u8282\u6570);
        let offset = 0;
        for (const item of \u53D1\u9001\u961F\u5217) {
          out.set(item, offset);
          offset += item.byteLength;
        }
        \u53D1\u9001\u961F\u5217 = [];
        \u961F\u5217\u5B57\u8282\u6570 = 0;
        try {
          controller.enqueue(out);
        } catch (e) {
          \u5DF2\u5173\u95ED = true;
          grpcBridge.readyState = WebSocket.CLOSED;
        }
      }, "\u5237\u65B0\u53D1\u9001\u961F\u5217");
      const \u5B89\u6392\u5237\u65B0\u53D1\u9001\u961F\u5217 = /* @__PURE__ */ __name(() => {
        if (\u961F\u5217\u5B57\u8282\u6570 >= \u4E0B\u884C\u7F13\u5B58\u4E0A\u9650) {
          \u5237\u65B0\u53D1\u9001\u961F\u5217();
          return;
        }
        if (\u5237\u65B0Microtask\u5DF2\u6392\u961F || \u5237\u65B0\u5B9A\u65F6\u5668) return;
        \u5237\u65B0Microtask\u5DF2\u6392\u961F = true;
        queueMicrotask(() => {
          \u5237\u65B0Microtask\u5DF2\u6392\u961F = false;
          if (\u5DF2\u5173\u95ED || \u961F\u5217\u5B57\u8282\u6570 === 0 || \u5237\u65B0\u5B9A\u65F6\u5668) return;
          \u5237\u65B0\u5B9A\u65F6\u5668 = setTimeout(\u5237\u65B0\u53D1\u9001\u961F\u5217, \u4E0B\u884C\u5237\u65B0\u95F4\u9694);
        });
      }, "\u5B89\u6392\u5237\u65B0\u53D1\u9001\u961F\u5217");
      const \u5173\u95ED\u8FDE\u63A5 = /* @__PURE__ */ __name(() => {
        if (\u5DF2\u5173\u95ED) return;
        GRPC\u4E0A\u884C\u5199\u5165\u961F\u5217?.\u6E05\u7A7A();
        \u5237\u65B0\u53D1\u9001\u961F\u5217(true);
        \u5DF2\u5173\u95ED = true;
        grpcBridge.readyState = WebSocket.CLOSED;
        if (\u5237\u65B0\u5B9A\u65F6\u5668) clearTimeout(\u5237\u65B0\u5B9A\u65F6\u5668);
        if (\u8FDC\u7AEF\u5199\u5165\u5668) {
          try {
            \u8FDC\u7AEF\u5199\u5165\u5668.releaseLock();
          } catch (e) {
          }
          \u8FDC\u7AEF\u5199\u5165\u5668 = null;
        }
        \u5F53\u524D\u5199\u5165Socket = null;
        try {
          reader.releaseLock();
        } catch (e) {
        }
        try {
          remoteConnWrapper.socket?.close();
        } catch (e) {
        }
        try {
          controller.close();
        } catch (e) {
        }
      }, "\u5173\u95ED\u8FDE\u63A5");
      const \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668 = /* @__PURE__ */ __name(() => {
        if (\u8FDC\u7AEF\u5199\u5165\u5668) {
          try {
            \u8FDC\u7AEF\u5199\u5165\u5668.releaseLock();
          } catch (e) {
          }
          \u8FDC\u7AEF\u5199\u5165\u5668 = null;
        }
        \u5F53\u524D\u5199\u5165Socket = null;
      }, "\u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668");
      const \u4E0A\u884C\u5199\u5165\u961F\u5217 = GRPC\u4E0A\u884C\u5199\u5165\u961F\u5217 = \u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217({
        \u83B7\u53D6\u5199\u5165\u5668: /* @__PURE__ */ __name(() => {
          const socket = remoteConnWrapper.socket;
          if (!socket) return null;
          if (socket !== \u5F53\u524D\u5199\u5165Socket) {
            \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
            \u5F53\u524D\u5199\u5165Socket = socket;
            \u8FDC\u7AEF\u5199\u5165\u5668 = socket.writable.getWriter();
          }
          return \u8FDC\u7AEF\u5199\u5165\u5668;
        }, "\u83B7\u53D6\u5199\u5165\u5668"),
        \u91CA\u653E\u5199\u5165\u5668: \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668,
        \u91CD\u8BD5\u8FDE\u63A5: /* @__PURE__ */ __name(async () => {
          if (typeof remoteConnWrapper.retryConnect !== "function") throw new Error("retry unavailable");
          await remoteConnWrapper.retryConnect();
        }, "\u91CD\u8BD5\u8FDE\u63A5"),
        \u5173\u95ED\u8FDE\u63A5,
        \u540D\u79F0: "gRPC\u4E0A\u884C"
      });
      const \u5199\u5165\u8FDC\u7AEF = /* @__PURE__ */ __name(async (payload, allowRetry = true) => {
        return \u4E0A\u884C\u5199\u5165\u961F\u5217.\u5199\u5165\u5E76\u7B49\u5F85(payload, allowRetry);
      }, "\u5199\u5165\u8FDC\u7AEF");
      try {
        let pending = new Uint8Array(0);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (!value || value.byteLength === 0) continue;
          const \u5F53\u524D\u5757 = value instanceof Uint8Array ? value : new Uint8Array(value);
          const merged = new Uint8Array(pending.length + \u5F53\u524D\u5757.length);
          merged.set(pending, 0);
          merged.set(\u5F53\u524D\u5757, pending.length);
          pending = merged;
          while (pending.byteLength >= 5) {
            const grpcLen = pending[1] << 24 >>> 0 | pending[2] << 16 | pending[3] << 8 | pending[4];
            const frameSize = 5 + grpcLen;
            if (pending.byteLength < frameSize) break;
            const grpcPayload = pending.subarray(5, frameSize);
            pending = pending.slice(frameSize);
            if (!grpcPayload.byteLength) continue;
            let payload = grpcPayload;
            if (payload.byteLength >= 2 && payload[0] === 10) {
              let shift = 0;
              let offset = 1;
              let varint\u6709\u6548 = false;
              while (offset < payload.length) {
                const current = payload[offset++];
                if ((current & 128) === 0) {
                  varint\u6709\u6548 = true;
                  break;
                }
                shift += 7;
                if (shift > 35) break;
              }
              if (varint\u6709\u6548) payload = payload.subarray(offset);
            }
            if (!payload.byteLength) continue;
            if (isDnsQuery) {
              if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(payload, grpcBridge, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
              else await forwardataudp(payload, grpcBridge, null, request);
              continue;
            }
            if (remoteConnWrapper.socket) {
              if (!await \u5199\u5165\u8FDC\u7AEF(payload)) throw new Error("Remote socket is not ready");
            } else {
              const \u9996\u5305bytes = \u6570\u636E\u8F6CUint8Array(payload);
              if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C === null) \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = \u9996\u5305bytes.byteLength >= 58 && \u9996\u5305bytes[56] === 13 && \u9996\u5305bytes[57] === 10;
              if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) {
                const \u89E3\u6790\u7ED3\u679C = \u89E3\u6790\u6728\u9A6C\u8BF7\u6C42(\u9996\u5305bytes, yourUUID);
                if (\u89E3\u6790\u7ED3\u679C?.hasError) throw new Error(\u89E3\u6790\u7ED3\u679C.message || "Invalid trojan request");
                const { port, hostname, rawClientData, isUDP } = \u89E3\u6790\u7ED3\u679C;
                log(`[gRPC] \u6728\u9A6C\u9996\u5305: ${hostname}:${port} | UDP: ${isUDP ? "\u662F" : "\u5426"}`);
                if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
                if (isUDP) {
                  isDnsQuery = true;
                  if (\u6709\u6548\u6570\u636E\u957F\u5EA6(rawClientData) > 0) await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(rawClientData, grpcBridge, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
                } else {
                  await forwardataTCP(hostname, port, rawClientData, grpcBridge, null, remoteConnWrapper, yourUUID, request);
                }
              } else {
                \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = false;
                const \u89E3\u6790\u7ED3\u679C = \u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42(\u9996\u5305bytes, yourUUID);
                if (\u89E3\u6790\u7ED3\u679C?.hasError) throw new Error(\u89E3\u6790\u7ED3\u679C.message || "Invalid \u9B4F\u70C8\u601D request");
                const { port, hostname, version, isUDP, rawClientData } = \u89E3\u6790\u7ED3\u679C;
                log(`[gRPC] \u9B4F\u70C8\u601D\u9996\u5305: ${hostname}:${port} | UDP: ${isUDP ? "\u662F" : "\u5426"}`);
                if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
                if (isUDP) {
                  if (port !== 53) throw new Error("UDP is not supported");
                  isDnsQuery = true;
                }
                const respHeader = new Uint8Array([version, 0]);
                grpcBridge.send(respHeader);
                const rawData = rawClientData;
                if (isDnsQuery) {
                  if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(rawData, grpcBridge, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
                  else await forwardataudp(rawData, grpcBridge, null, request);
                } else await forwardataTCP(hostname, port, rawData, grpcBridge, null, remoteConnWrapper, yourUUID, request);
              }
            }
          }
          \u5237\u65B0\u53D1\u9001\u961F\u5217();
        }
        await \u4E0A\u884C\u5199\u5165\u961F\u5217.\u7B49\u5F85\u7A7A();
      } catch (err) {
        log(`[gRPC\u8F6C\u53D1] \u5904\u7406\u5931\u8D25: ${err?.message || err}`);
      } finally {
        \u4E0A\u884C\u5199\u5165\u961F\u5217.\u6E05\u7A7A();
        \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
        \u5173\u95ED\u8FDE\u63A5();
      }
    },
    cancel() {
      GRPC\u4E0A\u884C\u5199\u5165\u961F\u5217?.\u6E05\u7A7A();
      try {
        remoteConnWrapper.socket?.close();
      } catch (e) {
      }
      try {
        reader.releaseLock();
      } catch (e) {
      }
    }
  }), { status: 200, headers: grpcHeaders });
}
__name(\u5904\u7406gRPC\u8BF7\u6C42, "\u5904\u7406gRPC\u8BF7\u6C42");
function \u662F\u6709\u6548WS\u65E9\u671F\u6570\u636E(bytes, token) {
  if (!bytes?.byteLength) return false;
  if (bytes.byteLength >= 18 && UUID\u5B57\u8282\u5339\u914D(bytes, 1, token)) return true;
  if (bytes.byteLength < 58 || bytes[56] !== 13 || bytes[57] !== 10) return false;
  const trojanPassword = sha224(token);
  for (let i = 0; i < 56; i++) {
    if (bytes[i] !== trojanPassword.charCodeAt(i)) return false;
  }
  return true;
}
__name(\u662F\u6709\u6548WS\u65E9\u671F\u6570\u636E, "\u662F\u6709\u6548WS\u65E9\u671F\u6570\u636E");
function \u89E3\u7801WS\u65E9\u671F\u6570\u636E(header, token) {
  if (!header) return null;
  if (header.length > WS\u65E9\u671F\u6570\u636E\u6700\u5927\u5934\u957F\u5EA6) throw new Error("early data is too large");
  let bytes;
  const Uint8ArrayBase64 = (
    /** @type {any} */
    Uint8Array
  );
  if (typeof Uint8ArrayBase64.fromBase64 === "function") {
    try {
      bytes = Uint8ArrayBase64.fromBase64(header, { alphabet: "base64url" });
    } catch (_) {
    }
  }
  if (!bytes) {
    let normalized = header.replace(/-/g, "+").replace(/_/g, "/");
    const padding = normalized.length % 4;
    if (padding) normalized += "=".repeat(4 - padding);
    let binaryString;
    try {
      binaryString = atob(normalized);
    } catch (_) {
      return null;
    }
    bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
  }
  if (bytes.byteLength > WS\u65E9\u671F\u6570\u636E\u6700\u5927\u5B57\u8282) throw new Error("early data is too large");
  return \u662F\u6709\u6548WS\u65E9\u671F\u6570\u636E(bytes, token) ? bytes : null;
}
__name(\u89E3\u7801WS\u65E9\u671F\u6570\u636E, "\u89E3\u7801WS\u65E9\u671F\u6570\u636E");
async function \u5904\u7406WS\u8BF7\u6C42(request, yourUUID, url) {
  const WS\u5957\u63A5\u5B57\u5BF9 = new WebSocketPair();
  const [clientSock, serverSock] = Object.values(WS\u5957\u63A5\u5B57\u5BF9);
  try {
    /** @type {any} */
    serverSock.accept({ allowHalfOpen: true });
  } catch (_) {
    serverSock.accept();
  }
  serverSock.binaryType = "arraybuffer";
  let remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null };
  let isDnsQuery = false;
  let \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = null;
  const \u6728\u9A6CUDP\u4E0A\u4E0B\u6587 = { \u7F13\u5B58: new Uint8Array(0) };
  const earlyDataHeader = request.headers.get("sec-websocket-protocol") || "";
  const SS\u6A21\u5F0F\u7981\u7528EarlyData = !!url.searchParams.get("enc");
  let WS\u4E0A\u884C\u5199\u5165\u961F\u5217 = null;
  let WS\u663E\u5F0F\u4F20\u8F93\u94FE = Promise.resolve();
  let WS\u663E\u5F0F\u4F20\u8F93\u505C\u6B62\u63A5\u6536 = false, WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25 = false, WS\u663E\u5F0F\u4F20\u8F93\u6536\u5C3E\u5DF2\u5165\u961F = false;
  let WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 = 0, WS\u663E\u5F0F\u961F\u5217\u6761\u76EE = 0;
  let \u5224\u65AD\u534F\u8BAE\u7C7B\u578B = null, \u5F53\u524D\u5199\u5165Socket = null, \u8FDC\u7AEF\u5199\u5165\u5668 = null;
  let ss\u4E0A\u4E0B\u6587 = null, ss\u521D\u59CB\u5316\u4EFB\u52A1 = null;
  const \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668 = /* @__PURE__ */ __name(() => {
    if (\u8FDC\u7AEF\u5199\u5165\u5668) {
      try {
        \u8FDC\u7AEF\u5199\u5165\u5668.releaseLock();
      } catch (e) {
      }
      \u8FDC\u7AEF\u5199\u5165\u5668 = null;
    }
    \u5F53\u524D\u5199\u5165Socket = null;
  }, "\u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668");
  const \u4E0A\u884C\u5199\u5165\u961F\u5217 = WS\u4E0A\u884C\u5199\u5165\u961F\u5217 = \u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217({
    \u83B7\u53D6\u5199\u5165\u5668: /* @__PURE__ */ __name(() => {
      const socket = remoteConnWrapper.socket;
      if (!socket) return null;
      if (socket !== \u5F53\u524D\u5199\u5165Socket) {
        \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
        \u5F53\u524D\u5199\u5165Socket = socket;
        \u8FDC\u7AEF\u5199\u5165\u5668 = socket.writable.getWriter();
      }
      return \u8FDC\u7AEF\u5199\u5165\u5668;
    }, "\u83B7\u53D6\u5199\u5165\u5668"),
    \u91CA\u653E\u5199\u5165\u5668: \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668,
    \u91CD\u8BD5\u8FDE\u63A5: /* @__PURE__ */ __name(async () => {
      if (typeof remoteConnWrapper.retryConnect !== "function") throw new Error("retry unavailable");
      await remoteConnWrapper.retryConnect();
    }, "\u91CD\u8BD5\u8FDE\u63A5"),
    \u5173\u95ED\u8FDE\u63A5: /* @__PURE__ */ __name(() => {
      try {
        remoteConnWrapper.socket?.close();
      } catch (e) {
      }
      closeSocketQuietly(serverSock);
    }, "\u5173\u95ED\u8FDE\u63A5"),
    \u540D\u79F0: "WS\u4E0A\u884C"
  });
  const \u5199\u5165\u8FDC\u7AEF = /* @__PURE__ */ __name(async (chunk, allowRetry = true) => {
    return \u4E0A\u884C\u5199\u5165\u961F\u5217.\u5199\u5165\u5E76\u7B49\u5F85(chunk, allowRetry);
  }, "\u5199\u5165\u8FDC\u7AEF");
  const \u83B7\u53D6SS\u4E0A\u4E0B\u6587 = /* @__PURE__ */ __name(async () => {
    if (ss\u4E0A\u4E0B\u6587) return ss\u4E0A\u4E0B\u6587;
    if (!ss\u521D\u59CB\u5316\u4EFB\u52A1) {
      ss\u521D\u59CB\u5316\u4EFB\u52A1 = (async () => {
        const \u8BF7\u6C42\u52A0\u5BC6\u65B9\u5F0F = (url.searchParams.get("enc") || "").toLowerCase();
        const \u9996\u9009\u52A0\u5BC6\u914D\u7F6E = SS\u652F\u6301\u52A0\u5BC6\u914D\u7F6E[\u8BF7\u6C42\u52A0\u5BC6\u65B9\u5F0F] || SS\u652F\u6301\u52A0\u5BC6\u914D\u7F6E["aes-128-gcm"];
        const \u5165\u7AD9\u5019\u9009\u52A0\u5BC6\u914D\u7F6E = [\u9996\u9009\u52A0\u5BC6\u914D\u7F6E, ...Object.values(SS\u652F\u6301\u52A0\u5BC6\u914D\u7F6E).filter((c) => c.method !== \u9996\u9009\u52A0\u5BC6\u914D\u7F6E.method)];
        const \u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1\u7F13\u5B58 = /* @__PURE__ */ new Map();
        const \u53D6\u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1 = /* @__PURE__ */ __name((config) => {
          if (!\u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1\u7F13\u5B58.has(config.method)) \u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1\u7F13\u5B58.set(config.method, SS\u6D3E\u751F\u4E3B\u5BC6\u94A5(yourUUID, config.keyLen));
          return \u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1\u7F13\u5B58.get(config.method);
        }, "\u53D6\u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1");
        const \u5165\u7AD9\u72B6\u6001 = {
          buffer: new Uint8Array(0),
          hasSalt: false,
          waitPayloadLength: null,
          decryptKey: null,
          nonceCounter: new Uint8Array(SSNonce\u957F\u5EA6),
          \u52A0\u5BC6\u914D\u7F6E: null
        };
        const \u521D\u59CB\u5316\u5165\u7AD9\u89E3\u5BC6\u72B6\u6001 = /* @__PURE__ */ __name(async () => {
          const lengthCipherTotalLength = 2 + SSAEAD\u6807\u7B7E\u957F\u5EA6;
          const \u6700\u5927\u76D0\u957F\u5EA6 = Math.max(...\u5165\u7AD9\u5019\u9009\u52A0\u5BC6\u914D\u7F6E.map((c) => c.saltLen));
          const \u6700\u5927\u5BF9\u9F50\u626B\u63CF\u5B57\u8282 = 16;
          const \u53EF\u626B\u63CF\u6700\u5927\u504F\u79FB = Math.min(\u6700\u5927\u5BF9\u9F50\u626B\u63CF\u5B57\u8282, Math.max(0, \u5165\u7AD9\u72B6\u6001.buffer.byteLength - (lengthCipherTotalLength + Math.min(...\u5165\u7AD9\u5019\u9009\u52A0\u5BC6\u914D\u7F6E.map((c) => c.saltLen)))));
          for (let offset = 0; offset <= \u53EF\u626B\u63CF\u6700\u5927\u504F\u79FB; offset++) {
            for (const \u52A0\u5BC6\u914D\u7F6E of \u5165\u7AD9\u5019\u9009\u52A0\u5BC6\u914D\u7F6E) {
              const \u521D\u59CB\u5316\u6700\u5C0F\u957F\u5EA6 = offset + \u52A0\u5BC6\u914D\u7F6E.saltLen + lengthCipherTotalLength;
              if (\u5165\u7AD9\u72B6\u6001.buffer.byteLength < \u521D\u59CB\u5316\u6700\u5C0F\u957F\u5EA6) continue;
              const salt = \u5165\u7AD9\u72B6\u6001.buffer.subarray(offset, offset + \u52A0\u5BC6\u914D\u7F6E.saltLen);
              const lengthCipher = \u5165\u7AD9\u72B6\u6001.buffer.subarray(offset + \u52A0\u5BC6\u914D\u7F6E.saltLen, \u521D\u59CB\u5316\u6700\u5C0F\u957F\u5EA6);
              const masterKey = await \u53D6\u5165\u7AD9\u4E3B\u5BC6\u94A5\u4EFB\u52A1(\u52A0\u5BC6\u914D\u7F6E);
              const decryptKey = await SS\u6D3E\u751F\u4F1A\u8BDD\u5BC6\u94A5(\u52A0\u5BC6\u914D\u7F6E, masterKey, salt, ["decrypt"]);
              const nonceCounter = new Uint8Array(SSNonce\u957F\u5EA6);
              try {
                const lengthPlain = await SSAEAD\u89E3\u5BC6(decryptKey, nonceCounter, lengthCipher);
                if (lengthPlain.byteLength !== 2) continue;
                const payloadLength = lengthPlain[0] << 8 | lengthPlain[1];
                if (payloadLength < 0 || payloadLength > \u52A0\u5BC6\u914D\u7F6E.maxChunk) continue;
                if (offset > 0) log(`[SS\u5165\u7AD9] \u68C0\u6D4B\u5230\u524D\u5BFC\u566A\u58F0 ${offset}B\uFF0C\u5DF2\u81EA\u52A8\u5BF9\u9F50`);
                if (\u52A0\u5BC6\u914D\u7F6E.method !== \u9996\u9009\u52A0\u5BC6\u914D\u7F6E.method) log(`[SS\u5165\u7AD9] URL enc=${\u8BF7\u6C42\u52A0\u5BC6\u65B9\u5F0F || \u9996\u9009\u52A0\u5BC6\u914D\u7F6E.method} \u4E0E\u5B9E\u9645 ${\u52A0\u5BC6\u914D\u7F6E.method} \u4E0D\u4E00\u81F4\uFF0C\u5DF2\u81EA\u52A8\u5207\u6362`);
                \u5165\u7AD9\u72B6\u6001.buffer = \u5165\u7AD9\u72B6\u6001.buffer.subarray(\u521D\u59CB\u5316\u6700\u5C0F\u957F\u5EA6);
                \u5165\u7AD9\u72B6\u6001.decryptKey = decryptKey;
                \u5165\u7AD9\u72B6\u6001.nonceCounter = nonceCounter;
                \u5165\u7AD9\u72B6\u6001.waitPayloadLength = payloadLength;
                \u5165\u7AD9\u72B6\u6001.\u52A0\u5BC6\u914D\u7F6E = \u52A0\u5BC6\u914D\u7F6E;
                \u5165\u7AD9\u72B6\u6001.hasSalt = true;
                return true;
              } catch (_) {
              }
            }
          }
          const \u521D\u59CB\u5316\u5931\u8D25\u5224\u5B9A\u957F\u5EA6 = \u6700\u5927\u76D0\u957F\u5EA6 + lengthCipherTotalLength + \u6700\u5927\u5BF9\u9F50\u626B\u63CF\u5B57\u8282;
          if (\u5165\u7AD9\u72B6\u6001.buffer.byteLength >= \u521D\u59CB\u5316\u5931\u8D25\u5224\u5B9A\u957F\u5EA6) {
            throw new Error(`SS handshake decrypt failed (enc=${\u8BF7\u6C42\u52A0\u5BC6\u65B9\u5F0F || "auto"}, candidates=${\u5165\u7AD9\u5019\u9009\u52A0\u5BC6\u914D\u7F6E.map((c) => c.method).join("/")})`);
          }
          return false;
        }, "\u521D\u59CB\u5316\u5165\u7AD9\u89E3\u5BC6\u72B6\u6001");
        const \u5165\u7AD9\u89E3\u5BC6\u5668 = {
          async \u8F93\u5165(dataChunk) {
            const chunk = \u6570\u636E\u8F6CUint8Array(dataChunk);
            if (chunk.byteLength > 0) \u5165\u7AD9\u72B6\u6001.buffer = \u62FC\u63A5\u5B57\u8282\u6570\u636E(\u5165\u7AD9\u72B6\u6001.buffer, chunk);
            if (!\u5165\u7AD9\u72B6\u6001.hasSalt) {
              const \u521D\u59CB\u5316\u6210\u529F = await \u521D\u59CB\u5316\u5165\u7AD9\u89E3\u5BC6\u72B6\u6001();
              if (!\u521D\u59CB\u5316\u6210\u529F) return [];
            }
            const plaintextChunks = [];
            while (true) {
              if (\u5165\u7AD9\u72B6\u6001.waitPayloadLength === null) {
                const lengthCipherTotalLength = 2 + SSAEAD\u6807\u7B7E\u957F\u5EA6;
                if (\u5165\u7AD9\u72B6\u6001.buffer.byteLength < lengthCipherTotalLength) break;
                const lengthCipher = \u5165\u7AD9\u72B6\u6001.buffer.subarray(0, lengthCipherTotalLength);
                \u5165\u7AD9\u72B6\u6001.buffer = \u5165\u7AD9\u72B6\u6001.buffer.subarray(lengthCipherTotalLength);
                const lengthPlain = await SSAEAD\u89E3\u5BC6(\u5165\u7AD9\u72B6\u6001.decryptKey, \u5165\u7AD9\u72B6\u6001.nonceCounter, lengthCipher);
                if (lengthPlain.byteLength !== 2) throw new Error("SS length decrypt failed");
                const payloadLength = lengthPlain[0] << 8 | lengthPlain[1];
                if (payloadLength < 0 || payloadLength > \u5165\u7AD9\u72B6\u6001.\u52A0\u5BC6\u914D\u7F6E.maxChunk) throw new Error(`SS payload length invalid: ${payloadLength}`);
                \u5165\u7AD9\u72B6\u6001.waitPayloadLength = payloadLength;
              }
              const payloadCipherTotalLength = \u5165\u7AD9\u72B6\u6001.waitPayloadLength + SSAEAD\u6807\u7B7E\u957F\u5EA6;
              if (\u5165\u7AD9\u72B6\u6001.buffer.byteLength < payloadCipherTotalLength) break;
              const payloadCipher = \u5165\u7AD9\u72B6\u6001.buffer.subarray(0, payloadCipherTotalLength);
              \u5165\u7AD9\u72B6\u6001.buffer = \u5165\u7AD9\u72B6\u6001.buffer.subarray(payloadCipherTotalLength);
              const payloadPlain = await SSAEAD\u89E3\u5BC6(\u5165\u7AD9\u72B6\u6001.decryptKey, \u5165\u7AD9\u72B6\u6001.nonceCounter, payloadCipher);
              plaintextChunks.push(payloadPlain);
              \u5165\u7AD9\u72B6\u6001.waitPayloadLength = null;
            }
            return plaintextChunks;
          }
        };
        let \u51FA\u7AD9\u52A0\u5BC6\u5668 = null;
        const SS\u5355\u6279\u6700\u5927\u5B57\u8282 = 32 * 1024;
        const \u83B7\u53D6\u51FA\u7AD9\u52A0\u5BC6\u5668 = /* @__PURE__ */ __name(async () => {
          if (\u51FA\u7AD9\u52A0\u5BC6\u5668) return \u51FA\u7AD9\u52A0\u5BC6\u5668;
          if (!\u5165\u7AD9\u72B6\u6001.\u52A0\u5BC6\u914D\u7F6E) throw new Error("SS cipher is not negotiated");
          const \u51FA\u7AD9\u52A0\u5BC6\u914D\u7F6E = \u5165\u7AD9\u72B6\u6001.\u52A0\u5BC6\u914D\u7F6E;
          const \u51FA\u7AD9\u4E3B\u5BC6\u94A5 = await SS\u6D3E\u751F\u4E3B\u5BC6\u94A5(yourUUID, \u51FA\u7AD9\u52A0\u5BC6\u914D\u7F6E.keyLen);
          const \u51FA\u7AD9\u968F\u673A\u5B57\u8282 = crypto.getRandomValues(new Uint8Array(\u51FA\u7AD9\u52A0\u5BC6\u914D\u7F6E.saltLen));
          const \u51FA\u7AD9\u52A0\u5BC6\u5BC6\u94A5 = await SS\u6D3E\u751F\u4F1A\u8BDD\u5BC6\u94A5(\u51FA\u7AD9\u52A0\u5BC6\u914D\u7F6E, \u51FA\u7AD9\u4E3B\u5BC6\u94A5, \u51FA\u7AD9\u968F\u673A\u5B57\u8282, ["encrypt"]);
          const \u51FA\u7AD9Nonce\u8BA1\u6570\u5668 = new Uint8Array(SSNonce\u957F\u5EA6);
          let \u968F\u673A\u5B57\u8282\u5DF2\u53D1\u9001 = false;
          \u51FA\u7AD9\u52A0\u5BC6\u5668 = {
            async \u52A0\u5BC6\u5E76\u53D1\u9001(dataChunk, sendChunk) {
              const plaintextData = \u6570\u636E\u8F6CUint8Array(dataChunk);
              if (!\u968F\u673A\u5B57\u8282\u5DF2\u53D1\u9001) {
                await sendChunk(\u51FA\u7AD9\u968F\u673A\u5B57\u8282);
                \u968F\u673A\u5B57\u8282\u5DF2\u53D1\u9001 = true;
              }
              if (plaintextData.byteLength === 0) return;
              let offset = 0;
              while (offset < plaintextData.byteLength) {
                const end = Math.min(offset + \u51FA\u7AD9\u52A0\u5BC6\u914D\u7F6E.maxChunk, plaintextData.byteLength);
                const payloadPlain = plaintextData.subarray(offset, end);
                const lengthPlain = new Uint8Array(2);
                lengthPlain[0] = payloadPlain.byteLength >>> 8 & 255;
                lengthPlain[1] = payloadPlain.byteLength & 255;
                const lengthCipher = await SSAEAD\u52A0\u5BC6(\u51FA\u7AD9\u52A0\u5BC6\u5BC6\u94A5, \u51FA\u7AD9Nonce\u8BA1\u6570\u5668, lengthPlain);
                const payloadCipher = await SSAEAD\u52A0\u5BC6(\u51FA\u7AD9\u52A0\u5BC6\u5BC6\u94A5, \u51FA\u7AD9Nonce\u8BA1\u6570\u5668, payloadPlain);
                const frame = new Uint8Array(lengthCipher.byteLength + payloadCipher.byteLength);
                frame.set(lengthCipher, 0);
                frame.set(payloadCipher, lengthCipher.byteLength);
                await sendChunk(frame);
                offset = end;
              }
            }
          };
          return \u51FA\u7AD9\u52A0\u5BC6\u5668;
        }, "\u83B7\u53D6\u51FA\u7AD9\u52A0\u5BC6\u5668");
        let SS\u53D1\u9001\u961F\u5217 = Promise.resolve();
        const SS\u5165\u961F\u53D1\u9001 = /* @__PURE__ */ __name((chunk) => {
          SS\u53D1\u9001\u961F\u5217 = SS\u53D1\u9001\u961F\u5217.then(async () => {
            if (serverSock.readyState !== WebSocket.OPEN) return;
            const \u5DF2\u521D\u59CB\u5316\u51FA\u7AD9\u52A0\u5BC6\u5668 = await \u83B7\u53D6\u51FA\u7AD9\u52A0\u5BC6\u5668();
            await \u5DF2\u521D\u59CB\u5316\u51FA\u7AD9\u52A0\u5BC6\u5668.\u52A0\u5BC6\u5E76\u53D1\u9001(chunk, async (encryptedChunk) => {
              if (encryptedChunk.byteLength > 0 && serverSock.readyState === WebSocket.OPEN) {
                await WebSocket\u53D1\u9001\u5E76\u7B49\u5F85(serverSock, encryptedChunk.buffer);
              }
            });
          }).catch((error) => {
            log(`[SS\u53D1\u9001] \u52A0\u5BC6\u5931\u8D25: ${error?.message || error}`);
            closeSocketQuietly(serverSock);
          });
          return SS\u53D1\u9001\u961F\u5217;
        }, "SS\u5165\u961F\u53D1\u9001");
        const \u56DE\u5305Socket = {
          get readyState() {
            return serverSock.readyState;
          },
          send(data) {
            const chunk = \u6570\u636E\u8F6CUint8Array(data);
            if (chunk.byteLength <= SS\u5355\u6279\u6700\u5927\u5B57\u8282) {
              return SS\u5165\u961F\u53D1\u9001(chunk);
            }
            for (let i = 0; i < chunk.byteLength; i += SS\u5355\u6279\u6700\u5927\u5B57\u8282) {
              SS\u5165\u961F\u53D1\u9001(chunk.subarray(i, Math.min(i + SS\u5355\u6279\u6700\u5927\u5B57\u8282, chunk.byteLength)));
            }
            return SS\u53D1\u9001\u961F\u5217;
          },
          close() {
            closeSocketQuietly(serverSock);
          }
        };
        ss\u4E0A\u4E0B\u6587 = {
          \u5165\u7AD9\u89E3\u5BC6\u5668,
          \u56DE\u5305Socket,
          \u9996\u5305\u5DF2\u5EFA\u7ACB: false,
          \u76EE\u6807\u4E3B\u673A: "",
          \u76EE\u6807\u7AEF\u53E3: 0
        };
        return ss\u4E0A\u4E0B\u6587;
      })().finally(() => {
        ss\u521D\u59CB\u5316\u4EFB\u52A1 = null;
      });
    }
    return ss\u521D\u59CB\u5316\u4EFB\u52A1;
  }, "\u83B7\u53D6SS\u4E0A\u4E0B\u6587");
  const \u5904\u7406SS\u6570\u636E = /* @__PURE__ */ __name(async (chunk) => {
    const \u4E0A\u4E0B\u6587 = await \u83B7\u53D6SS\u4E0A\u4E0B\u6587();
    let \u660E\u6587\u5757\u6570\u7EC4 = null;
    try {
      \u660E\u6587\u5757\u6570\u7EC4 = await \u4E0A\u4E0B\u6587.\u5165\u7AD9\u89E3\u5BC6\u5668.\u8F93\u5165(chunk);
    } catch (err) {
      const msg = err?.message || `${err}`;
      if (msg.includes("Decryption failed") || msg.includes("SS handshake decrypt failed") || msg.includes("SS length decrypt failed")) {
        log(`[SS\u5165\u7AD9] \u89E3\u5BC6\u5931\u8D25\uFF0C\u8FDE\u63A5\u5173\u95ED: ${msg}`);
        closeSocketQuietly(serverSock);
        return;
      }
      throw err;
    }
    for (const \u660E\u6587\u5757 of \u660E\u6587\u5757\u6570\u7EC4) {
      let \u5DF2\u5199\u5165 = false;
      try {
        \u5DF2\u5199\u5165 = await \u5199\u5165\u8FDC\u7AEF(\u660E\u6587\u5757, false);
      } catch (err) {
        if (
          /** @type {any} */
          err?.isQueueOverflow
        ) throw err;
        \u5DF2\u5199\u5165 = false;
      }
      if (\u5DF2\u5199\u5165) continue;
      if (\u4E0A\u4E0B\u6587.\u9996\u5305\u5DF2\u5EFA\u7ACB && \u4E0A\u4E0B\u6587.\u76EE\u6807\u4E3B\u673A && \u4E0A\u4E0B\u6587.\u76EE\u6807\u7AEF\u53E3 > 0) {
        await forwardataTCP(\u4E0A\u4E0B\u6587.\u76EE\u6807\u4E3B\u673A, \u4E0A\u4E0B\u6587.\u76EE\u6807\u7AEF\u53E3, \u660E\u6587\u5757, \u4E0A\u4E0B\u6587.\u56DE\u5305Socket, null, remoteConnWrapper, yourUUID, request);
        continue;
      }
      const \u660E\u6587\u6570\u636E = \u6570\u636E\u8F6CUint8Array(\u660E\u6587\u5757);
      if (\u660E\u6587\u6570\u636E.byteLength < 3) throw new Error("invalid ss data");
      const addressType = \u660E\u6587\u6570\u636E[0];
      let cursor = 1;
      let hostname = "";
      if (addressType === 1) {
        if (\u660E\u6587\u6570\u636E.byteLength < cursor + 4 + 2) throw new Error("invalid ss ipv4 length");
        hostname = `${\u660E\u6587\u6570\u636E[cursor]}.${\u660E\u6587\u6570\u636E[cursor + 1]}.${\u660E\u6587\u6570\u636E[cursor + 2]}.${\u660E\u6587\u6570\u636E[cursor + 3]}`;
        cursor += 4;
      } else if (addressType === 3) {
        if (\u660E\u6587\u6570\u636E.byteLength < cursor + 1) throw new Error("invalid ss domain length");
        const domainLength = \u660E\u6587\u6570\u636E[cursor];
        cursor += 1;
        if (\u660E\u6587\u6570\u636E.byteLength < cursor + domainLength + 2) throw new Error("invalid ss domain data");
        hostname = SS\u6587\u672C\u89E3\u7801\u5668.decode(\u660E\u6587\u6570\u636E.subarray(cursor, cursor + domainLength));
        cursor += domainLength;
      } else if (addressType === 4) {
        if (\u660E\u6587\u6570\u636E.byteLength < cursor + 16 + 2) throw new Error("invalid ss ipv6 length");
        const ipv6 = [];
        const ipv6View = new DataView(\u660E\u6587\u6570\u636E.buffer, \u660E\u6587\u6570\u636E.byteOffset + cursor, 16);
        for (let i = 0; i < 8; i++) ipv6.push(ipv6View.getUint16(i * 2).toString(16));
        hostname = ipv6.join(":");
        cursor += 16;
      } else {
        throw new Error(`invalid ss addressType: ${addressType}`);
      }
      if (!hostname) throw new Error(`invalid ss address: ${addressType}`);
      const port = \u660E\u6587\u6570\u636E[cursor] << 8 | \u660E\u6587\u6570\u636E[cursor + 1];
      cursor += 2;
      const rawClientData = \u660E\u6587\u6570\u636E.subarray(cursor);
      if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
      \u4E0A\u4E0B\u6587.\u9996\u5305\u5DF2\u5EFA\u7ACB = true;
      \u4E0A\u4E0B\u6587.\u76EE\u6807\u4E3B\u673A = hostname;
      \u4E0A\u4E0B\u6587.\u76EE\u6807\u7AEF\u53E3 = port;
      await forwardataTCP(hostname, port, rawClientData, \u4E0A\u4E0B\u6587.\u56DE\u5305Socket, null, remoteConnWrapper, yourUUID, request);
    }
  }, "\u5904\u7406SS\u6570\u636E");
  const \u5904\u7406WS\u5165\u7AD9\u6570\u636E = /* @__PURE__ */ __name(async (chunk) => {
    let \u5F53\u524D\u5757\u5B57\u8282 = null;
    if (isDnsQuery) {
      if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) return await \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(chunk, serverSock, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
      return await forwardataudp(chunk, serverSock, null, request);
    }
    if (\u5224\u65AD\u534F\u8BAE\u7C7B\u578B === "ss") {
      await \u5904\u7406SS\u6570\u636E(chunk);
      return;
    }
    if (await \u5199\u5165\u8FDC\u7AEF(chunk)) return;
    if (\u5224\u65AD\u534F\u8BAE\u7C7B\u578B === null) {
      if (url.searchParams.get("enc")) \u5224\u65AD\u534F\u8BAE\u7C7B\u578B = "ss";
      else {
        \u5F53\u524D\u5757\u5B57\u8282 = \u5F53\u524D\u5757\u5B57\u8282 || \u6570\u636E\u8F6CUint8Array(chunk);
        const bytes = \u5F53\u524D\u5757\u5B57\u8282;
        \u5224\u65AD\u534F\u8BAE\u7C7B\u578B = bytes.byteLength >= 58 && bytes[56] === 13 && bytes[57] === 10 ? "\u6728\u9A6C" : "\u9B4F\u70C8\u601D";
      }
      \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = \u5224\u65AD\u534F\u8BAE\u7C7B\u578B === "\u6728\u9A6C";
      log(`[WS\u8F6C\u53D1] \u534F\u8BAE\u7C7B\u578B: ${\u5224\u65AD\u534F\u8BAE\u7C7B\u578B} | \u6765\u81EA: ${url.host} | UA: ${request.headers.get("user-agent") || "\u672A\u77E5"}`);
    }
    if (\u5224\u65AD\u534F\u8BAE\u7C7B\u578B === "ss") {
      await \u5904\u7406SS\u6570\u636E(chunk);
      return;
    }
    if (await \u5199\u5165\u8FDC\u7AEF(chunk)) return;
    if (\u5224\u65AD\u534F\u8BAE\u7C7B\u578B === "\u6728\u9A6C") {
      const \u89E3\u6790\u7ED3\u679C = \u89E3\u6790\u6728\u9A6C\u8BF7\u6C42(chunk, yourUUID);
      if (\u89E3\u6790\u7ED3\u679C?.hasError) throw new Error(\u89E3\u6790\u7ED3\u679C.message || "Invalid trojan request");
      const { port, hostname, rawClientData, isUDP } = \u89E3\u6790\u7ED3\u679C;
      if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
      if (isUDP) {
        isDnsQuery = true;
        if (\u6709\u6548\u6570\u636E\u957F\u5EA6(rawClientData) > 0) return \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(rawClientData, serverSock, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
        return;
      }
      await forwardataTCP(hostname, port, rawClientData, serverSock, null, remoteConnWrapper, yourUUID, request);
    } else {
      \u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C = false;
      \u5F53\u524D\u5757\u5B57\u8282 = \u5F53\u524D\u5757\u5B57\u8282 || \u6570\u636E\u8F6CUint8Array(chunk);
      const bytes = \u5F53\u524D\u5757\u5B57\u8282;
      const \u89E3\u6790\u7ED3\u679C = \u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42(bytes, yourUUID);
      if (\u89E3\u6790\u7ED3\u679C?.hasError) throw new Error(\u89E3\u6790\u7ED3\u679C.message || "Invalid \u9B4F\u70C8\u601D request");
      const { port, hostname, version, isUDP, rawClientData } = \u89E3\u6790\u7ED3\u679C;
      if (isSpeedTestSite(hostname)) throw new Error("Speedtest site is blocked");
      if (isUDP) {
        if (port === 53) isDnsQuery = true;
        else throw new Error("UDP is not supported");
      }
      const respHeader = new Uint8Array([version, 0]);
      const rawData = rawClientData;
      if (isDnsQuery) {
        if (\u5224\u65AD\u662F\u5426\u662F\u6728\u9A6C) return \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(rawData, serverSock, \u6728\u9A6CUDP\u4E0A\u4E0B\u6587, request);
        return forwardataudp(rawData, serverSock, respHeader, request);
      }
      await forwardataTCP(hostname, port, rawData, serverSock, respHeader, remoteConnWrapper, yourUUID, request);
    }
  }, "\u5904\u7406WS\u5165\u7AD9\u6570\u636E");
  const \u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF = /* @__PURE__ */ __name((err) => {
    if (WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25) return;
    WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25 = true;
    WS\u663E\u5F0F\u4F20\u8F93\u505C\u6B62\u63A5\u6536 = true;
    WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 = 0;
    WS\u663E\u5F0F\u961F\u5217\u6761\u76EE = 0;
    const msg = err?.message || `${err}`;
    if (msg.includes("Network connection lost") || msg.includes("ReadableStream is closed")) {
      log(`[WS\u8F6C\u53D1] \u8FDE\u63A5\u7ED3\u675F: ${msg}`);
    } else {
      log(`[WS\u8F6C\u53D1] \u5904\u7406\u5931\u8D25: ${msg}`);
    }
    \u4E0A\u884C\u5199\u5165\u961F\u5217.\u6E05\u7A7A();
    \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
    closeSocketQuietly(serverSock);
  }, "\u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF");
  const \u8FFD\u52A0WS\u663E\u5F0F\u4F20\u8F93\u4EFB\u52A1 = /* @__PURE__ */ __name((\u4EFB\u52A1) => {
    WS\u663E\u5F0F\u4F20\u8F93\u94FE = WS\u663E\u5F0F\u4F20\u8F93\u94FE.then(\u4EFB\u52A1).catch(\u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF);
    return WS\u663E\u5F0F\u4F20\u8F93\u94FE;
  }, "\u8FFD\u52A0WS\u663E\u5F0F\u4F20\u8F93\u4EFB\u52A1");
  const \u5165\u961FWS\u663E\u5F0F\u4F20\u8F93 = /* @__PURE__ */ __name((data) => {
    if (WS\u663E\u5F0F\u4F20\u8F93\u505C\u6B62\u63A5\u6536 || WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25) return;
    const chunkSize = Math.max(0, \u6709\u6548\u6570\u636E\u957F\u5EA6(data));
    const nextBytes = WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 + chunkSize;
    const nextItems = WS\u663E\u5F0F\u961F\u5217\u6761\u76EE + 1;
    if (nextBytes > \u4E0A\u884C\u961F\u5217\u6700\u5927\u5B57\u8282 || nextItems > \u4E0A\u884C\u961F\u5217\u6700\u5927\u6761\u76EE) {
      \u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF(new Error(`[WS\u663E\u5F0F\u4F20\u8F93] \u961F\u5217\u6EA2\u51FA: ${nextBytes}B/${nextItems}`));
      return;
    }
    WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 = nextBytes;
    WS\u663E\u5F0F\u961F\u5217\u6761\u76EE = nextItems;
    \u8FFD\u52A0WS\u663E\u5F0F\u4F20\u8F93\u4EFB\u52A1(async () => {
      WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 = Math.max(0, WS\u663E\u5F0F\u961F\u5217\u5B57\u8282 - chunkSize);
      WS\u663E\u5F0F\u961F\u5217\u6761\u76EE = Math.max(0, WS\u663E\u5F0F\u961F\u5217\u6761\u76EE - 1);
      if (WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25) return;
      await \u5904\u7406WS\u5165\u7AD9\u6570\u636E(data);
    });
  }, "\u5165\u961FWS\u663E\u5F0F\u4F20\u8F93");
  const \u6536\u5C3EWS\u663E\u5F0F\u4F20\u8F93 = /* @__PURE__ */ __name(() => {
    if (WS\u663E\u5F0F\u4F20\u8F93\u6536\u5C3E\u5DF2\u5165\u961F) return;
    WS\u663E\u5F0F\u4F20\u8F93\u6536\u5C3E\u5DF2\u5165\u961F = true;
    WS\u663E\u5F0F\u4F20\u8F93\u505C\u6B62\u63A5\u6536 = true;
    \u8FFD\u52A0WS\u663E\u5F0F\u4F20\u8F93\u4EFB\u52A1(async () => {
      if (WS\u663E\u5F0F\u4F20\u8F93\u5931\u8D25) return;
      await \u4E0A\u884C\u5199\u5165\u961F\u5217.\u7B49\u5F85\u7A7A();
      \u91CA\u653E\u8FDC\u7AEF\u5199\u5165\u5668();
    });
  }, "\u6536\u5C3EWS\u663E\u5F0F\u4F20\u8F93");
  serverSock.addEventListener("message", (event) => {
    \u5165\u961FWS\u663E\u5F0F\u4F20\u8F93(event.data);
  });
  serverSock.addEventListener("close", () => {
    closeSocketQuietly(serverSock);
    \u6536\u5C3EWS\u663E\u5F0F\u4F20\u8F93();
  });
  serverSock.addEventListener("error", (err) => {
    \u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF(err);
  });
  if (!SS\u6A21\u5F0F\u7981\u7528EarlyData && earlyDataHeader) {
    try {
      const bytes = \u89E3\u7801WS\u65E9\u671F\u6570\u636E(earlyDataHeader, yourUUID);
      if (bytes?.byteLength) \u5165\u961FWS\u663E\u5F0F\u4F20\u8F93(bytes.buffer);
    } catch (error) {
      \u5904\u7406WS\u663E\u5F0F\u4F20\u8F93\u9519\u8BEF(error);
    }
  }
  return new Response(null, { status: 101, webSocket: clientSock, headers: { "Sec-WebSocket-Extensions": "" } });
}
__name(\u5904\u7406WS\u8BF7\u6C42, "\u5904\u7406WS\u8BF7\u6C42");
var \u6728\u9A6C\u6587\u672C\u89E3\u7801\u5668 = new TextDecoder();
function \u89E3\u6790\u6728\u9A6C\u8BF7\u6C42(buffer, passwordPlainText) {
  const data = \u6570\u636E\u8F6CUint8Array(buffer);
  const sha224Password = sha224(passwordPlainText);
  if (data.byteLength < 58) return { hasError: true, message: "invalid data" };
  let crLfIndex = 56;
  if (data[crLfIndex] !== 13 || data[crLfIndex + 1] !== 10) return { hasError: true, message: "invalid header format" };
  for (let i = 0; i < crLfIndex; i++) {
    if (data[i] !== sha224Password.charCodeAt(i)) return { hasError: true, message: "invalid password" };
  }
  const socks5Index = crLfIndex + 2;
  if (data.byteLength < socks5Index + 6) return { hasError: true, message: "invalid S5 request data" };
  const cmd = data[socks5Index];
  if (cmd !== 1 && cmd !== 3) return { hasError: true, message: "unsupported command, only TCP/UDP is allowed" };
  const isUDP = cmd === 3;
  const atype = data[socks5Index + 1];
  let addressLength = 0;
  let addressIndex = socks5Index + 2;
  let address = "";
  switch (atype) {
    case 1:
      addressLength = 4;
      if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
      address = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
      break;
    case 3:
      if (data.byteLength < addressIndex + 1) return { hasError: true, message: "invalid S5 request data" };
      addressLength = data[addressIndex];
      addressIndex += 1;
      if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
      address = \u6728\u9A6C\u6587\u672C\u89E3\u7801\u5668.decode(data.subarray(addressIndex, addressIndex + addressLength));
      break;
    case 4:
      addressLength = 16;
      if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const partIndex = addressIndex + i * 2;
        ipv6.push((data[partIndex] << 8 | data[partIndex + 1]).toString(16));
      }
      address = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `invalid addressType is ${atype}` };
  }
  if (!address) {
    return { hasError: true, message: `address is empty, addressType is ${atype}` };
  }
  const portIndex = addressIndex + addressLength;
  if (data.byteLength < portIndex + 4) return { hasError: true, message: "invalid S5 request data" };
  const portRemote = data[portIndex] << 8 | data[portIndex + 1];
  return {
    hasError: false,
    addressType: atype,
    port: portRemote,
    hostname: address,
    isUDP,
    rawClientData: data.subarray(portIndex + 4)
  };
}
__name(\u89E3\u6790\u6728\u9A6C\u8BF7\u6C42, "\u89E3\u6790\u6728\u9A6C\u8BF7\u6C42");
var UUID\u5B57\u8282\u7F13\u5B58 = /* @__PURE__ */ new Map();
var VLESS\u6587\u672C\u89E3\u7801\u5668 = new TextDecoder();
function \u8BFB\u53D6\u5341\u516D\u8FDB\u5236\u534A\u5B57\u8282(code) {
  if (code >= 48 && code <= 57) return code - 48;
  code |= 32;
  if (code >= 97 && code <= 102) return code - 87;
  return -1;
}
__name(\u8BFB\u53D6\u5341\u516D\u8FDB\u5236\u534A\u5B57\u8282, "\u8BFB\u53D6\u5341\u516D\u8FDB\u5236\u534A\u5B57\u8282");
function \u83B7\u53D6UUID\u5B57\u8282(uuid) {
  const key = String(uuid || "");
  let cached = UUID\u5B57\u8282\u7F13\u5B58.get(key);
  if (cached) return cached;
  const clean = key.replace(/-/g, "");
  if (clean.length !== 32) return null;
  const bytes = new Uint8Array(16);
  for (let i = 0; i < 16; i++) {
    const high = \u8BFB\u53D6\u5341\u516D\u8FDB\u5236\u534A\u5B57\u8282(clean.charCodeAt(i * 2));
    const low = \u8BFB\u53D6\u5341\u516D\u8FDB\u5236\u534A\u5B57\u8282(clean.charCodeAt(i * 2 + 1));
    if (high < 0 || low < 0) return null;
    bytes[i] = high << 4 | low;
  }
  if (UUID\u5B57\u8282\u7F13\u5B58.size >= 32) UUID\u5B57\u8282\u7F13\u5B58.clear();
  UUID\u5B57\u8282\u7F13\u5B58.set(key, bytes);
  return bytes;
}
__name(\u83B7\u53D6UUID\u5B57\u8282, "\u83B7\u53D6UUID\u5B57\u8282");
function UUID\u5B57\u8282\u5339\u914D(data, offset, uuid) {
  const expected = \u83B7\u53D6UUID\u5B57\u8282(uuid);
  if (!expected || data.byteLength < offset + 16) return false;
  for (let i = 0; i < 16; i++) {
    if (data[offset + i] !== expected[i]) return false;
  }
  return true;
}
__name(UUID\u5B57\u8282\u5339\u914D, "UUID\u5B57\u8282\u5339\u914D");
function \u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42(chunk, token) {
  const data = \u6570\u636E\u8F6CUint8Array(chunk);
  const length = data.byteLength;
  if (length < 24) return { hasError: true, message: "Invalid data" };
  const version = data[0];
  if (!UUID\u5B57\u8282\u5339\u914D(data, 1, token)) return { hasError: true, message: "Invalid uuid" };
  const optLen = data[17];
  const cmdIndex = 18 + optLen;
  if (length < cmdIndex + 4) return { hasError: true, message: "Invalid data" };
  const cmd = data[cmdIndex];
  let isUDP = false;
  if (cmd === 1) {
  } else if (cmd === 2) {
    isUDP = true;
  } else {
    return { hasError: true, message: "Invalid command" };
  }
  const portIdx = cmdIndex + 1;
  const port = data[portIdx] << 8 | data[portIdx + 1];
  let addrValIdx = portIdx + 3, addrLen = 0, hostname = "";
  const addressType = data[portIdx + 2];
  switch (addressType) {
    case 1:
      addrLen = 4;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid IPv4 address length" };
      hostname = `${data[addrValIdx]}.${data[addrValIdx + 1]}.${data[addrValIdx + 2]}.${data[addrValIdx + 3]}`;
      break;
    case 2:
      if (length < addrValIdx + 1) return { hasError: true, message: "Invalid domain length" };
      addrLen = data[addrValIdx];
      addrValIdx += 1;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid domain data" };
      hostname = VLESS\u6587\u672C\u89E3\u7801\u5668.decode(data.subarray(addrValIdx, addrValIdx + addrLen));
      break;
    case 3:
      addrLen = 16;
      if (length < addrValIdx + addrLen) return { hasError: true, message: "Invalid IPv6 address length" };
      const ipv6 = [];
      for (let i = 0; i < 8; i++) {
        const base = addrValIdx + i * 2;
        ipv6.push((data[base] << 8 | data[base + 1]).toString(16));
      }
      hostname = ipv6.join(":");
      break;
    default:
      return { hasError: true, message: `Invalid address type: ${addressType}` };
  }
  if (!hostname) return { hasError: true, message: `Invalid address: ${addressType}` };
  const rawIndex = addrValIdx + addrLen;
  return { hasError: false, addressType, port, hostname, isUDP, rawClientData: data.subarray(rawIndex), version };
}
__name(\u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42, "\u89E3\u6790\u9B4F\u70C8\u601D\u8BF7\u6C42");
var SS\u652F\u6301\u52A0\u5BC6\u914D\u7F6E = {
  "aes-128-gcm": { method: "aes-128-gcm", keyLen: 16, saltLen: 16, maxChunk: 16383, aesLength: 128 },
  "aes-256-gcm": { method: "aes-256-gcm", keyLen: 32, saltLen: 32, maxChunk: 16383, aesLength: 256 }
};
var SSAEAD\u6807\u7B7E\u957F\u5EA6 = 16;
var SSNonce\u957F\u5EA6 = 12;
var SS\u5B50\u5BC6\u94A5\u4FE1\u606F = new TextEncoder().encode("ss-subkey");
var SS\u6587\u672C\u7F16\u7801\u5668 = new TextEncoder();
var SS\u6587\u672C\u89E3\u7801\u5668 = new TextDecoder();
var SS\u4E3B\u5BC6\u94A5\u7F13\u5B58 = /* @__PURE__ */ new Map();
function \u6570\u636E\u8F6CUint8Array(data) {
  if (data instanceof Uint8Array) return data;
  if (data instanceof ArrayBuffer) return new Uint8Array(data);
  if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  return new Uint8Array(data || 0);
}
__name(\u6570\u636E\u8F6CUint8Array, "\u6570\u636E\u8F6CUint8Array");
function \u62FC\u63A5\u5B57\u8282\u6570\u636E(...chunkList) {
  if (!chunkList || chunkList.length === 0) return new Uint8Array(0);
  const chunks = chunkList.map(\u6570\u636E\u8F6CUint8Array);
  const total = chunks.reduce((sum, c) => sum + c.byteLength, 0);
  const result = new Uint8Array(total);
  let offset = 0;
  for (const c of chunks) {
    result.set(c, offset);
    offset += c.byteLength;
  }
  return result;
}
__name(\u62FC\u63A5\u5B57\u8282\u6570\u636E, "\u62FC\u63A5\u5B57\u8282\u6570\u636E");
async function \u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E(chunk, webSocket, \u4E0A\u4E0B\u6587, request) {
  const \u5F53\u524D\u5757 = \u6570\u636E\u8F6CUint8Array(chunk);
  const \u7F13\u5B58\u5757 = \u4E0A\u4E0B\u6587?.\u7F13\u5B58 instanceof Uint8Array ? \u4E0A\u4E0B\u6587.\u7F13\u5B58 : new Uint8Array(0);
  const input = \u7F13\u5B58\u5757.byteLength ? \u62FC\u63A5\u5B57\u8282\u6570\u636E(\u7F13\u5B58\u5757, \u5F53\u524D\u5757) : \u5F53\u524D\u5757;
  let cursor = 0;
  while (cursor < input.byteLength) {
    const packetStart = cursor;
    const atype = input[cursor];
    let addrCursor = cursor + 1;
    let addrLen = 0;
    if (atype === 1) addrLen = 4;
    else if (atype === 4) addrLen = 16;
    else if (atype === 3) {
      if (input.byteLength < addrCursor + 1) break;
      addrLen = 1 + input[addrCursor];
    } else throw new Error(`invalid trojan udp addressType: ${atype}`);
    const portCursor = addrCursor + addrLen;
    if (input.byteLength < portCursor + 6) break;
    const port = input[portCursor] << 8 | input[portCursor + 1];
    const payloadLength = input[portCursor + 2] << 8 | input[portCursor + 3];
    if (input[portCursor + 4] !== 13 || input[portCursor + 5] !== 10) throw new Error("invalid trojan udp delimiter");
    const payloadStart = portCursor + 6;
    const payloadEnd = payloadStart + payloadLength;
    if (input.byteLength < payloadEnd) break;
    const \u5730\u5740\u7AEF\u53E3\u5934 = input.slice(packetStart, portCursor + 2);
    const payload = input.slice(payloadStart, payloadEnd);
    cursor = payloadEnd;
    if (port !== 53) throw new Error("UDP is not supported");
    if (!payload.byteLength) continue;
    let tcpDNS\u67E5\u8BE2 = payload;
    if (payload.byteLength < 2 || (payload[0] << 8 | payload[1]) !== payload.byteLength - 2) {
      tcpDNS\u67E5\u8BE2 = new Uint8Array(payload.byteLength + 2);
      tcpDNS\u67E5\u8BE2[0] = payload.byteLength >>> 8 & 255;
      tcpDNS\u67E5\u8BE2[1] = payload.byteLength & 255;
      tcpDNS\u67E5\u8BE2.set(payload, 2);
    }
    const dns\u54CD\u5E94\u4E0A\u4E0B\u6587 = { \u7F13\u5B58: new Uint8Array(0) };
    await forwardataudp(tcpDNS\u67E5\u8BE2, webSocket, null, request, (dnsRespChunk) => {
      const \u5F53\u524D\u54CD\u5E94\u5757 = \u6570\u636E\u8F6CUint8Array(dnsRespChunk);
      const \u54CD\u5E94\u8F93\u5165 = dns\u54CD\u5E94\u4E0A\u4E0B\u6587.\u7F13\u5B58.byteLength ? \u62FC\u63A5\u5B57\u8282\u6570\u636E(dns\u54CD\u5E94\u4E0A\u4E0B\u6587.\u7F13\u5B58, \u5F53\u524D\u54CD\u5E94\u5757) : \u5F53\u524D\u54CD\u5E94\u5757;
      const \u54CD\u5E94\u5E27\u5217\u8868 = [];
      let responseCursor = 0;
      while (responseCursor + 2 <= \u54CD\u5E94\u8F93\u5165.byteLength) {
        const dnsLen = \u54CD\u5E94\u8F93\u5165[responseCursor] << 8 | \u54CD\u5E94\u8F93\u5165[responseCursor + 1];
        const dnsStart = responseCursor + 2;
        const dnsEnd = dnsStart + dnsLen;
        if (dnsEnd > \u54CD\u5E94\u8F93\u5165.byteLength) break;
        const dnsPayload = \u54CD\u5E94\u8F93\u5165.slice(dnsStart, dnsEnd);
        const frame = new Uint8Array(\u5730\u5740\u7AEF\u53E3\u5934.byteLength + 4 + dnsPayload.byteLength);
        frame.set(\u5730\u5740\u7AEF\u53E3\u5934, 0);
        frame[\u5730\u5740\u7AEF\u53E3\u5934.byteLength] = dnsPayload.byteLength >>> 8 & 255;
        frame[\u5730\u5740\u7AEF\u53E3\u5934.byteLength + 1] = dnsPayload.byteLength & 255;
        frame[\u5730\u5740\u7AEF\u53E3\u5934.byteLength + 2] = 13;
        frame[\u5730\u5740\u7AEF\u53E3\u5934.byteLength + 3] = 10;
        frame.set(dnsPayload, \u5730\u5740\u7AEF\u53E3\u5934.byteLength + 4);
        \u54CD\u5E94\u5E27\u5217\u8868.push(frame);
        responseCursor = dnsEnd;
      }
      dns\u54CD\u5E94\u4E0A\u4E0B\u6587.\u7F13\u5B58 = \u54CD\u5E94\u8F93\u5165.slice(responseCursor);
      return \u54CD\u5E94\u5E27\u5217\u8868.length ? \u54CD\u5E94\u5E27\u5217\u8868 : new Uint8Array(0);
    });
  }
  if (\u4E0A\u4E0B\u6587) \u4E0A\u4E0B\u6587.\u7F13\u5B58 = input.slice(cursor);
}
__name(\u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E, "\u8F6C\u53D1\u6728\u9A6CUDP\u6570\u636E");
function SS\u9012\u589ENonce\u8BA1\u6570\u5668(counter) {
  for (let i = 0; i < counter.length; i++) {
    counter[i] = counter[i] + 1 & 255;
    if (counter[i] !== 0) return;
  }
}
__name(SS\u9012\u589ENonce\u8BA1\u6570\u5668, "SS\u9012\u589ENonce\u8BA1\u6570\u5668");
async function SS\u6D3E\u751F\u4E3B\u5BC6\u94A5(passwordText, keyLen) {
  const cacheKey = `${keyLen}:${passwordText}`;
  if (SS\u4E3B\u5BC6\u94A5\u7F13\u5B58.has(cacheKey)) return SS\u4E3B\u5BC6\u94A5\u7F13\u5B58.get(cacheKey);
  const deriveTask = (async () => {
    const pwBytes = SS\u6587\u672C\u7F16\u7801\u5668.encode(passwordText || "");
    let prev = new Uint8Array(0), result = new Uint8Array(0);
    while (result.byteLength < keyLen) {
      const input = new Uint8Array(prev.byteLength + pwBytes.byteLength);
      input.set(prev, 0);
      input.set(pwBytes, prev.byteLength);
      prev = new Uint8Array(await crypto.subtle.digest("MD5", input));
      result = \u62FC\u63A5\u5B57\u8282\u6570\u636E(result, prev);
    }
    return result.slice(0, keyLen);
  })();
  SS\u4E3B\u5BC6\u94A5\u7F13\u5B58.set(cacheKey, deriveTask);
  try {
    return await deriveTask;
  } catch (error) {
    SS\u4E3B\u5BC6\u94A5\u7F13\u5B58.delete(cacheKey);
    throw error;
  }
}
__name(SS\u6D3E\u751F\u4E3B\u5BC6\u94A5, "SS\u6D3E\u751F\u4E3B\u5BC6\u94A5");
async function SS\u6D3E\u751F\u4F1A\u8BDD\u5BC6\u94A5(config, masterKey, salt, usages) {
  const hmacOpts = { name: "HMAC", hash: "SHA-1" };
  const saltHmacKey = await crypto.subtle.importKey("raw", salt, hmacOpts, false, ["sign"]);
  const prk = new Uint8Array(await crypto.subtle.sign("HMAC", saltHmacKey, masterKey));
  const prkHmacKey = await crypto.subtle.importKey("raw", prk, hmacOpts, false, ["sign"]);
  const subKey = new Uint8Array(config.keyLen);
  let prev = new Uint8Array(0), written = 0, counter = 1;
  while (written < config.keyLen) {
    const input = \u62FC\u63A5\u5B57\u8282\u6570\u636E(prev, SS\u5B50\u5BC6\u94A5\u4FE1\u606F, new Uint8Array([counter]));
    prev = new Uint8Array(await crypto.subtle.sign("HMAC", prkHmacKey, input));
    const copyLen = Math.min(prev.byteLength, config.keyLen - written);
    subKey.set(prev.subarray(0, copyLen), written);
    written += copyLen;
    counter += 1;
  }
  return crypto.subtle.importKey("raw", subKey, { name: "AES-GCM", length: config.aesLength }, false, usages);
}
__name(SS\u6D3E\u751F\u4F1A\u8BDD\u5BC6\u94A5, "SS\u6D3E\u751F\u4F1A\u8BDD\u5BC6\u94A5");
async function SSAEAD\u52A0\u5BC6(cryptoKey, nonceCounter, plaintext) {
  const iv = nonceCounter.slice();
  const ct = await crypto.subtle.encrypt({ name: "AES-GCM", iv, tagLength: 128 }, cryptoKey, plaintext);
  SS\u9012\u589ENonce\u8BA1\u6570\u5668(nonceCounter);
  return new Uint8Array(ct);
}
__name(SSAEAD\u52A0\u5BC6, "SSAEAD\u52A0\u5BC6");
async function SSAEAD\u89E3\u5BC6(cryptoKey, nonceCounter, ciphertext) {
  const iv = nonceCounter.slice();
  const pt = await crypto.subtle.decrypt({ name: "AES-GCM", iv, tagLength: 128 }, cryptoKey, ciphertext);
  SS\u9012\u589ENonce\u8BA1\u6570\u5668(nonceCounter);
  return new Uint8Array(pt);
}
__name(SSAEAD\u89E3\u5BC6, "SSAEAD\u89E3\u5BC6");
async function forwardataTCP(host, portNum, rawData, ws, respHeader, remoteConnWrapper, yourUUID, request = null) {
  log(`[TCP\u8F6C\u53D1] \u76EE\u6807: ${host}:${portNum} | \u53CD\u4EE3IP: ${\u53CD\u4EE3IP} | \u53CD\u4EE3\u515C\u5E95: ${\u542F\u7528\u53CD\u4EE3\u515C\u5E95 ? "\u662F" : "\u5426"} | \u53CD\u4EE3\u7C7B\u578B: ${\u542F\u7528SOCKS5\u53CD\u4EE3 || "proxyip"} | \u5168\u5C40: ${\u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 ? "\u662F" : "\u5426"}`);
  const \u8FDE\u63A5\u8D85\u65F6\u6BEB\u79D2 = 1e3;
  let \u5DF2\u901A\u8FC7\u4EE3\u7406\u53D1\u9001\u9996\u5305 = false;
  const TCP\u8FDE\u63A5 = \u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668(request);
  async function \u7B49\u5F85\u8FDE\u63A5\u5EFA\u7ACB(remoteSock, timeoutMs = \u8FDE\u63A5\u8D85\u65F6\u6BEB\u79D2) {
    await Promise.race([
      remoteSock.opened,
      new Promise((_, reject) => setTimeout(() => reject(new Error("\u8FDE\u63A5\u8D85\u65F6")), timeoutMs))
    ]);
  }
  __name(\u7B49\u5F85\u8FDE\u63A5\u5EFA\u7ACB, "\u7B49\u5F85\u8FDE\u63A5\u5EFA\u7ACB");
  async function \u6253\u5F00TCP\u8FDE\u63A5(address, port) {
    const remoteSock = TCP\u8FDE\u63A5({ hostname: address, port });
    try {
      await \u7B49\u5F85\u8FDE\u63A5\u5EFA\u7ACB(remoteSock);
      return remoteSock;
    } catch (err) {
      try {
        remoteSock?.close?.();
      } catch (e) {
      }
      throw err;
    }
  }
  __name(\u6253\u5F00TCP\u8FDE\u63A5, "\u6253\u5F00TCP\u8FDE\u63A5");
  async function \u5199\u5165\u9996\u5305(remoteSock, data) {
    if (\u6709\u6548\u6570\u636E\u957F\u5EA6(data) <= 0) return;
    const writer = remoteSock.writable.getWriter();
    try {
      await writer.write(\u6570\u636E\u8F6CUint8Array(data));
    } finally {
      try {
        writer.releaseLock();
      } catch (e) {
      }
    }
  }
  __name(\u5199\u5165\u9996\u5305, "\u5199\u5165\u9996\u5305");
  async function \u5E76\u53D1\u6253\u5F00\u5019\u9009\u8FDE\u63A5(\u5019\u9009\u5217\u8868) {
    if (\u5019\u9009\u5217\u8868.length === 1) {
      const \u5019\u9009 = \u5019\u9009\u5217\u8868[0];
      return { socket: await \u6253\u5F00TCP\u8FDE\u63A5(\u5019\u9009.hostname, \u5019\u9009.port), candidate: \u5019\u9009 };
    }
    const attempts = \u5019\u9009\u5217\u8868.map((\u5019\u9009) => \u6253\u5F00TCP\u8FDE\u63A5(\u5019\u9009.hostname, \u5019\u9009.port).then((socket) => ({ socket, candidate: \u5019\u9009 })));
    let winner = null;
    try {
      winner = await Promise.any(attempts);
      return winner;
    } finally {
      if (winner) {
        for (const attempt of attempts) {
          attempt.then(({ socket }) => {
            if (socket !== winner.socket) {
              try {
                socket?.close?.();
              } catch (e) {
              }
            }
          }).catch(() => {
          });
        }
      }
    }
  }
  __name(\u5E76\u53D1\u6253\u5F00\u5019\u9009\u8FDE\u63A5, "\u5E76\u53D1\u6253\u5F00\u5019\u9009\u8FDE\u63A5");
  async function connectDirect(address, port, data = null, \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = null, \u53CD\u4EE3\u515C\u5E95 = true) {
    if (\u6240\u6709\u53CD\u4EE3\u6570\u7EC4 && \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length > 0) {
      for (let i = 0; i < \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length; i += TCP\u5E76\u53D1\u62E8\u53F7\u6570) {
        const \u5019\u9009\u5217\u8868 = [];
        for (let j = 0; j < TCP\u5E76\u53D1\u62E8\u53F7\u6570 && i + j < \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length; j++) {
          const \u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = (\u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 + i + j) % \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.length;
          const [\u53CD\u4EE3\u5730\u5740, \u53CD\u4EE3\u7AEF\u53E3] = \u6240\u6709\u53CD\u4EE3\u6570\u7EC4[\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15];
          \u5019\u9009\u5217\u8868.push({ hostname: \u53CD\u4EE3\u5730\u5740, port: \u53CD\u4EE3\u7AEF\u53E3, index: \u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 });
        }
        let socket = null, candidate = null;
        try {
          log(`[\u53CD\u4EE3\u8FDE\u63A5] \u5E76\u53D1\u5C1D\u8BD5 ${\u5019\u9009\u5217\u8868.length} \u8DEF: ${\u5019\u9009\u5217\u8868.map((\u5019\u9009) => `${\u5019\u9009.hostname}:${\u5019\u9009.port}`).join(", ")}`);
          const \u8FDE\u63A5\u7ED3\u679C = await \u5E76\u53D1\u6253\u5F00\u5019\u9009\u8FDE\u63A5(\u5019\u9009\u5217\u8868);
          socket = \u8FDE\u63A5\u7ED3\u679C.socket;
          candidate = \u8FDE\u63A5\u7ED3\u679C.candidate;
          await \u5199\u5165\u9996\u5305(socket, data);
          log(`[\u53CD\u4EE3\u8FDE\u63A5] \u6210\u529F\u8FDE\u63A5\u5230: ${candidate.hostname}:${candidate.port} (\u7D22\u5F15: ${candidate.index})`);
          \u7F13\u5B58\u53CD\u4EE3\u6570\u7EC4\u7D22\u5F15 = candidate.index;
          return socket;
        } catch (err) {
          try {
            socket?.close?.();
          } catch (e) {
          }
          log(`[\u53CD\u4EE3\u8FDE\u63A5] \u672C\u6279\u8FDE\u63A5\u5931\u8D25: ${err.message || err}`);
        }
      }
    }
    if (\u53CD\u4EE3\u515C\u5E95) {
      const \u5019\u9009\u5217\u8868 = Array.from({ length: TCP\u5E76\u53D1\u62E8\u53F7\u6570 }, (_, attempt) => ({ hostname: address, port, attempt }));
      log(`[TCP\u76F4\u8FDE] \u5E76\u53D1\u5C1D\u8BD5 ${\u5019\u9009\u5217\u8868.length} \u8DEF: ${address}:${port}`);
      let socket = null;
      try {
        const \u8FDE\u63A5\u7ED3\u679C = await \u5E76\u53D1\u6253\u5F00\u5019\u9009\u8FDE\u63A5(\u5019\u9009\u5217\u8868);
        socket = \u8FDE\u63A5\u7ED3\u679C.socket;
        await \u5199\u5165\u9996\u5305(socket, data);
        return socket;
      } catch (err) {
        try {
          socket?.close?.();
        } catch (e) {
        }
        throw err;
      }
    } else {
      closeSocketQuietly(ws);
      throw new Error("[\u53CD\u4EE3\u8FDE\u63A5] \u6240\u6709\u53CD\u4EE3\u8FDE\u63A5\u5931\u8D25\uFF0C\u4E14\u672A\u542F\u7528\u53CD\u4EE3\u515C\u5E95\uFF0C\u8FDE\u63A5\u7EC8\u6B62\u3002");
    }
  }
  __name(connectDirect, "connectDirect");
  async function connecttoPry(\u5141\u8BB8\u53D1\u9001\u9996\u5305 = true) {
    if (remoteConnWrapper.connectingPromise) {
      await remoteConnWrapper.connectingPromise;
      return;
    }
    const \u672C\u6B21\u53D1\u9001\u9996\u5305 = \u5141\u8BB8\u53D1\u9001\u9996\u5305 && !\u5DF2\u901A\u8FC7\u4EE3\u7406\u53D1\u9001\u9996\u5305 && \u6709\u6548\u6570\u636E\u957F\u5EA6(rawData) > 0;
    const \u672C\u6B21\u9996\u5305\u6570\u636E = \u672C\u6B21\u53D1\u9001\u9996\u5305 ? rawData : null;
    const \u5F53\u524D\u8FDE\u63A5\u4EFB\u52A1 = (async () => {
      let newSocket;
      if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "socks5") {
        log(`[SOCKS5\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        newSocket = await socks5Connect(host, portNum, \u672C\u6B21\u9996\u5305\u6570\u636E, TCP\u8FDE\u63A5);
      } else if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "http") {
        log(`[HTTP\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        newSocket = await httpConnect(host, portNum, \u672C\u6B21\u9996\u5305\u6570\u636E, false, TCP\u8FDE\u63A5);
      } else if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "https") {
        log(`[HTTPS\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        newSocket = isIPHostname(parsedSocks5Address.hostname) ? await httpsConnect(host, portNum, \u672C\u6B21\u9996\u5305\u6570\u636E, TCP\u8FDE\u63A5) : await httpConnect(host, portNum, \u672C\u6B21\u9996\u5305\u6570\u636E, true, TCP\u8FDE\u63A5);
      } else if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "turn") {
        log(`[TURN\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        newSocket = await turnConnect(parsedSocks5Address, host, portNum, TCP\u8FDE\u63A5);
        if (\u6709\u6548\u6570\u636E\u957F\u5EA6(\u672C\u6B21\u9996\u5305\u6570\u636E) > 0) {
          const writer = newSocket.writable.getWriter();
          try {
            await writer.write(\u6570\u636E\u8F6CUint8Array(\u672C\u6B21\u9996\u5305\u6570\u636E));
          } finally {
            try {
              writer.releaseLock();
            } catch (e) {
            }
          }
        }
      } else if (\u542F\u7528SOCKS5\u53CD\u4EE3 === "sstp") {
        log(`[SSTP\u4EE3\u7406] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        newSocket = await sstpConnect(parsedSocks5Address, host, portNum, TCP\u8FDE\u63A5);
        if (\u6709\u6548\u6570\u636E\u957F\u5EA6(\u672C\u6B21\u9996\u5305\u6570\u636E) > 0) {
          const writer = newSocket.writable.getWriter();
          try {
            await writer.write(\u6570\u636E\u8F6CUint8Array(\u672C\u6B21\u9996\u5305\u6570\u636E));
          } finally {
            try {
              writer.releaseLock();
            } catch (e) {
            }
          }
        }
      } else {
        log(`[\u53CD\u4EE3\u8FDE\u63A5] \u4EE3\u7406\u5230: ${host}:${portNum}`);
        const \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = await \u89E3\u6790\u5730\u5740\u7AEF\u53E3(\u53CD\u4EE3IP, host, yourUUID);
        newSocket = await connectDirect(atob("UFJPWFlJUC50cDEuMDkwMjI3Lnh5eg=="), 1, \u672C\u6B21\u9996\u5305\u6570\u636E, \u6240\u6709\u53CD\u4EE3\u6570\u7EC4, \u542F\u7528\u53CD\u4EE3\u515C\u5E95);
      }
      if (\u672C\u6B21\u53D1\u9001\u9996\u5305) \u5DF2\u901A\u8FC7\u4EE3\u7406\u53D1\u9001\u9996\u5305 = true;
      remoteConnWrapper.socket = newSocket;
      newSocket.closed.catch(() => {
      }).finally(() => closeSocketQuietly(ws));
      connectStreams(newSocket, ws, respHeader, null);
    })();
    remoteConnWrapper.connectingPromise = \u5F53\u524D\u8FDE\u63A5\u4EFB\u52A1;
    try {
      await \u5F53\u524D\u8FDE\u63A5\u4EFB\u52A1;
    } finally {
      if (remoteConnWrapper.connectingPromise === \u5F53\u524D\u8FDE\u63A5\u4EFB\u52A1) {
        remoteConnWrapper.connectingPromise = null;
      }
    }
  }
  __name(connecttoPry, "connecttoPry");
  remoteConnWrapper.retryConnect = async () => connecttoPry(!\u5DF2\u901A\u8FC7\u4EE3\u7406\u53D1\u9001\u9996\u5305);
  if (\u542F\u7528SOCKS5\u53CD\u4EE3 && (\u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 || SOCKS5\u767D\u540D\u5355.some((p) => new RegExp(`^${p.replace(/\*/g, ".*")}$`, "i").test(host)))) {
    log(`[TCP\u8F6C\u53D1] \u542F\u7528 SOCKS5/HTTP/HTTPS/TURN/SSTP \u5168\u5C40\u4EE3\u7406`);
    try {
      await connecttoPry();
    } catch (err) {
      log(`[TCP\u8F6C\u53D1] SOCKS5/HTTP/HTTPS/TURN/SSTP \u4EE3\u7406\u8FDE\u63A5\u5931\u8D25: ${err.message}`);
      throw err;
    }
  } else {
    try {
      log(`[TCP\u8F6C\u53D1] \u5C1D\u8BD5\u76F4\u8FDE\u5230: ${host}:${portNum}`);
      const initialSocket = await connectDirect(host, portNum, rawData);
      remoteConnWrapper.socket = initialSocket;
      connectStreams(initialSocket, ws, respHeader, async () => {
        if (remoteConnWrapper.socket !== initialSocket) return;
        await connecttoPry();
      });
    } catch (err) {
      log(`[TCP\u8F6C\u53D1] \u76F4\u8FDE ${host}:${portNum} \u5931\u8D25: ${err.message}`);
      await connecttoPry();
    }
  }
}
__name(forwardataTCP, "forwardataTCP");
async function forwardataudp(udpChunk, webSocket, respHeader, request, \u54CD\u5E94\u5C01\u88C5\u5668 = null) {
  const \u8BF7\u6C42\u6570\u636E = \u6570\u636E\u8F6CUint8Array(udpChunk);
  const \u8BF7\u6C42\u5B57\u8282\u6570 = \u8BF7\u6C42\u6570\u636E.byteLength;
  log(`[UDP\u8F6C\u53D1] \u6536\u5230 DNS \u8BF7\u6C42: ${\u8BF7\u6C42\u5B57\u8282\u6570}B -> 8.8.4.4:53`);
  try {
    const TCP\u8FDE\u63A5 = \u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668(request);
    const tcpSocket = TCP\u8FDE\u63A5({ hostname: "8.8.4.4", port: 53 });
    let \u9B4F\u70C8\u601DHeader = respHeader;
    const writer = tcpSocket.writable.getWriter();
    await writer.write(\u8BF7\u6C42\u6570\u636E);
    log(`[UDP\u8F6C\u53D1] DNS \u8BF7\u6C42\u5DF2\u5199\u5165\u4E0A\u6E38: ${\u8BF7\u6C42\u5B57\u8282\u6570}B`);
    writer.releaseLock();
    await tcpSocket.readable.pipeTo(new WritableStream({
      async write(chunk) {
        const \u539F\u59CB\u54CD\u5E94 = \u6570\u636E\u8F6CUint8Array(chunk);
        log(`[UDP\u8F6C\u53D1] \u6536\u5230 DNS \u54CD\u5E94: ${\u539F\u59CB\u54CD\u5E94.byteLength}B`);
        const \u5C01\u88C5\u7ED3\u679C = \u54CD\u5E94\u5C01\u88C5\u5668 ? await \u54CD\u5E94\u5C01\u88C5\u5668(\u539F\u59CB\u54CD\u5E94) : \u539F\u59CB\u54CD\u5E94;
        const \u53D1\u9001\u7247\u6BB5\u5217\u8868 = Array.isArray(\u5C01\u88C5\u7ED3\u679C) ? \u5C01\u88C5\u7ED3\u679C : [\u5C01\u88C5\u7ED3\u679C];
        if (!\u53D1\u9001\u7247\u6BB5\u5217\u8868.length) return;
        if (webSocket.readyState !== WebSocket.OPEN) return;
        for (const fragment of \u53D1\u9001\u7247\u6BB5\u5217\u8868) {
          const \u8F6C\u53D1\u54CD\u5E94 = \u6570\u636E\u8F6CUint8Array(fragment);
          if (!\u8F6C\u53D1\u54CD\u5E94.byteLength) continue;
          if (\u9B4F\u70C8\u601DHeader) {
            const response = new Uint8Array(\u9B4F\u70C8\u601DHeader.length + \u8F6C\u53D1\u54CD\u5E94.byteLength);
            response.set(\u9B4F\u70C8\u601DHeader, 0);
            response.set(\u8F6C\u53D1\u54CD\u5E94, \u9B4F\u70C8\u601DHeader.length);
            await WebSocket\u53D1\u9001\u5E76\u7B49\u5F85(webSocket, response.buffer);
            \u9B4F\u70C8\u601DHeader = null;
          } else {
            await WebSocket\u53D1\u9001\u5E76\u7B49\u5F85(webSocket, \u8F6C\u53D1\u54CD\u5E94);
          }
        }
      }
    }));
  } catch (error) {
    log(`[UDP\u8F6C\u53D1] DNS \u8F6C\u53D1\u5931\u8D25: ${error?.message || error}`);
  }
}
__name(forwardataudp, "forwardataudp");
function closeSocketQuietly(socket) {
  try {
    if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) {
      socket.close();
    }
  } catch (error) {
  }
}
__name(closeSocketQuietly, "closeSocketQuietly");
async function WebSocket\u53D1\u9001\u5E76\u7B49\u5F85(webSocket, payload) {
  const sendResult = webSocket.send(payload);
  if (sendResult && typeof sendResult.then === "function") await sendResult;
}
__name(WebSocket\u53D1\u9001\u5E76\u7B49\u5F85, "WebSocket\u53D1\u9001\u5E76\u7B49\u5F85");
function \u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217({ \u83B7\u53D6\u5199\u5165\u5668, \u91CA\u653E\u5199\u5165\u5668, \u91CD\u8BD5\u8FDE\u63A5, \u5173\u95ED\u8FDE\u63A5, \u540D\u79F0 = "\u4E0A\u884C\u961F\u5217" }) {
  let chunks = [];
  let head = 0;
  let queuedBytes = 0;
  let draining = false;
  let closed = false;
  let bundleBuffer = null;
  let idleResolvers = [];
  let activeCompletions = null;
  const settleCompletions = /* @__PURE__ */ __name((completions, err = null) => {
    if (!completions) return;
    for (const completion of completions) {
      if (err) completion.reject(err);
      else completion.resolve();
    }
  }, "settleCompletions");
  const rejectQueued = /* @__PURE__ */ __name((err) => {
    for (let i = head; i < chunks.length; i++) {
      const item = chunks[i];
      if (item?.completions) settleCompletions(item.completions, err);
    }
  }, "rejectQueued");
  const compact = /* @__PURE__ */ __name(() => {
    if (head > 32 && head * 2 >= chunks.length) {
      chunks = chunks.slice(head);
      head = 0;
    }
  }, "compact");
  const resolveIdle = /* @__PURE__ */ __name(() => {
    if (queuedBytes || draining || !idleResolvers.length) return;
    const resolvers = idleResolvers;
    idleResolvers = [];
    for (const resolve of resolvers) resolve();
  }, "resolveIdle");
  const clear = /* @__PURE__ */ __name((err = null) => {
    const closeErr = err || (closed ? new Error(`${\u540D\u79F0}: queue closed`) : null);
    if (closeErr) {
      rejectQueued(closeErr);
      settleCompletions(activeCompletions, closeErr);
      activeCompletions = null;
    }
    chunks = [];
    head = 0;
    queuedBytes = 0;
    resolveIdle();
  }, "clear");
  const shift = /* @__PURE__ */ __name(() => {
    if (head >= chunks.length) return null;
    const item = chunks[head];
    chunks[head++] = void 0;
    queuedBytes -= item.chunk.byteLength;
    compact();
    return item;
  }, "shift");
  const bundle = /* @__PURE__ */ __name(() => {
    const first = shift();
    if (!first) return null;
    if (head >= chunks.length || first.chunk.byteLength >= \u4E0A\u884C\u5408\u5305\u76EE\u6807\u5B57\u8282) return first;
    let byteLength = first.chunk.byteLength;
    let end = head;
    let allowRetry = first.allowRetry;
    let completions = first.completions || null;
    while (end < chunks.length) {
      const next = chunks[end];
      const nextLength = byteLength + next.chunk.byteLength;
      if (nextLength > \u4E0A\u884C\u5408\u5305\u76EE\u6807\u5B57\u8282) break;
      byteLength = nextLength;
      allowRetry = allowRetry && next.allowRetry;
      if (next.completions) completions = completions ? completions.concat(next.completions) : next.completions;
      end++;
    }
    if (end === head) return first;
    const output = bundleBuffer ||= new Uint8Array(\u4E0A\u884C\u5408\u5305\u76EE\u6807\u5B57\u8282);
    output.set(first.chunk);
    let offset = first.chunk.byteLength;
    while (head < end) {
      const next = chunks[head];
      chunks[head++] = void 0;
      queuedBytes -= next.chunk.byteLength;
      output.set(next.chunk, offset);
      offset += next.chunk.byteLength;
    }
    compact();
    return { chunk: output.subarray(0, byteLength), allowRetry, completions };
  }, "bundle");
  const drain = /* @__PURE__ */ __name(async () => {
    if (draining || closed) return;
    draining = true;
    try {
      for (; ; ) {
        if (closed) break;
        const item = bundle();
        if (!item) break;
        let writer = \u83B7\u53D6\u5199\u5165\u5668();
        if (!writer) throw new Error(`${\u540D\u79F0}: remote writer unavailable`);
        const completions = item.completions || null;
        activeCompletions = completions;
        try {
          try {
            await writer.write(item.chunk);
          } catch (err) {
            \u91CA\u653E\u5199\u5165\u5668?.();
            if (!item.allowRetry || typeof \u91CD\u8BD5\u8FDE\u63A5 !== "function") throw err;
            await \u91CD\u8BD5\u8FDE\u63A5();
            writer = \u83B7\u53D6\u5199\u5165\u5668();
            if (!writer) throw err;
            await writer.write(item.chunk);
          }
          settleCompletions(completions);
        } catch (err) {
          settleCompletions(completions, err);
          throw err;
        } finally {
          if (activeCompletions === completions) activeCompletions = null;
        }
      }
    } catch (err) {
      closed = true;
      clear(err);
      log(`[${\u540D\u79F0}] \u5199\u5165\u5931\u8D25: ${err?.message || err}`);
      try {
        \u5173\u95ED\u8FDE\u63A5?.(err);
      } catch (_) {
      }
    } finally {
      draining = false;
      if (!closed && head < chunks.length) queueMicrotask(drain);
      else resolveIdle();
    }
  }, "drain");
  const enqueue = /* @__PURE__ */ __name((data, allowRetry = true, waitForFlush = false) => {
    if (closed) return false;
    if (!\u83B7\u53D6\u5199\u5165\u5668()) return false;
    const chunk = \u6570\u636E\u8F6CUint8Array(data);
    if (!chunk.byteLength) return true;
    const nextBytes = queuedBytes + chunk.byteLength;
    const nextItems = chunks.length - head + 1;
    if (nextBytes > \u4E0A\u884C\u961F\u5217\u6700\u5927\u5B57\u8282 || nextItems > \u4E0A\u884C\u961F\u5217\u6700\u5927\u6761\u76EE) {
      closed = true;
      const err = Object.assign(new Error(`${\u540D\u79F0}: upload queue overflow (${nextBytes}B/${nextItems})`), { isQueueOverflow: true });
      clear(err);
      log(`[${\u540D\u79F0}] \u961F\u5217\u8D85\u9650\uFF0C\u5173\u95ED\u8FDE\u63A5`);
      try {
        \u5173\u95ED\u8FDE\u63A5?.(err);
      } catch (_) {
      }
      throw err;
    }
    let completionPromise = null;
    let completions = null;
    if (waitForFlush) {
      completions = [];
      completionPromise = new Promise((resolve, reject) => completions.push({ resolve, reject }));
    }
    chunks.push({ chunk, allowRetry, completions });
    queuedBytes = nextBytes;
    if (!draining) queueMicrotask(drain);
    return waitForFlush ? completionPromise.then(() => true) : true;
  }, "enqueue");
  return {
    \u5199\u5165(data, allowRetry = true) {
      return enqueue(data, allowRetry, false);
    },
    \u5199\u5165\u5E76\u7B49\u5F85(data, allowRetry = true) {
      return enqueue(data, allowRetry, true);
    },
    async \u7B49\u5F85\u7A7A() {
      if (!queuedBytes && !draining) return;
      await new Promise((resolve) => idleResolvers.push(resolve));
    },
    \u6E05\u7A7A() {
      closed = true;
      clear();
    }
  };
}
__name(\u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217, "\u521B\u5EFA\u4E0A\u884C\u5199\u5165\u961F\u5217");
function \u521B\u5EFA\u4E0B\u884CGrain\u53D1\u9001\u5668(webSocket, headerData = null) {
  const packetCap = \u4E0B\u884CGrain\u5305\u5B57\u8282;
  const tailBytes = \u4E0B\u884CGrain\u5C3E\u90E8\u9608\u503C;
  const lowWaterBytes = Math.max(4096, tailBytes << 3);
  let header = headerData;
  let pendingBuffer = new Uint8Array(packetCap);
  let pendingBytes = 0;
  let flushTimer = null;
  let microtaskQueued = false;
  let generation = 0;
  let scheduledGeneration = 0;
  let waitRounds = 0;
  let flushPromise = null;
  const \u53D1\u9001\u539F\u59CB\u5757 = /* @__PURE__ */ __name(async (chunk) => {
    if (webSocket.readyState !== WebSocket.OPEN) throw new Error("ws.readyState is not open");
    await WebSocket\u53D1\u9001\u5E76\u7B49\u5F85(webSocket, chunk);
  }, "\u53D1\u9001\u539F\u59CB\u5757");
  const \u9644\u52A0\u54CD\u5E94\u5934 = /* @__PURE__ */ __name((chunk) => {
    if (!header) return chunk;
    const merged = new Uint8Array(header.length + chunk.byteLength);
    merged.set(header, 0);
    merged.set(chunk, header.length);
    header = null;
    return merged;
  }, "\u9644\u52A0\u54CD\u5E94\u5934");
  const flush = /* @__PURE__ */ __name(async () => {
    while (flushPromise) await flushPromise;
    if (flushTimer) clearTimeout(flushTimer);
    flushTimer = null;
    microtaskQueued = false;
    if (!pendingBytes) return;
    const output = pendingBuffer.subarray(0, pendingBytes).slice();
    pendingBuffer = new Uint8Array(packetCap);
    pendingBytes = 0;
    waitRounds = 0;
    flushPromise = \u53D1\u9001\u539F\u59CB\u5757(output).finally(() => {
      flushPromise = null;
    });
    return flushPromise;
  }, "flush");
  const scheduleFlush = /* @__PURE__ */ __name(() => {
    if (flushTimer || microtaskQueued) return;
    microtaskQueued = true;
    scheduledGeneration = generation;
    queueMicrotask(() => {
      microtaskQueued = false;
      if (!pendingBytes || flushTimer) return;
      if (packetCap - pendingBytes < tailBytes) {
        flush().catch(() => closeSocketQuietly(webSocket));
        return;
      }
      flushTimer = setTimeout(() => {
        flushTimer = null;
        if (!pendingBytes) return;
        if (packetCap - pendingBytes < tailBytes) {
          flush().catch(() => closeSocketQuietly(webSocket));
          return;
        }
        if (waitRounds < 2 && (generation !== scheduledGeneration || pendingBytes < lowWaterBytes)) {
          waitRounds++;
          scheduledGeneration = generation;
          scheduleFlush();
          return;
        }
        flush().catch(() => closeSocketQuietly(webSocket));
      }, Math.max(\u4E0B\u884CGrain\u9759\u9ED8\u6BEB\u79D2, 1));
    });
  }, "scheduleFlush");
  return {
    async \u76F4\u63A5\u53D1\u9001(data) {
      let chunk = \u6570\u636E\u8F6CUint8Array(data);
      if (!chunk.byteLength) return;
      chunk = \u9644\u52A0\u54CD\u5E94\u5934(chunk);
      await \u53D1\u9001\u539F\u59CB\u5757(chunk);
    },
    async \u53D1\u9001(data) {
      let chunk = \u6570\u636E\u8F6CUint8Array(data);
      if (!chunk.byteLength) return;
      chunk = \u9644\u52A0\u54CD\u5E94\u5934(chunk);
      let offset = 0;
      const totalBytes = chunk.byteLength;
      while (offset < totalBytes) {
        if (!pendingBytes && totalBytes - offset >= packetCap) {
          const sendBytes = Math.min(packetCap, totalBytes - offset);
          const view = offset || sendBytes !== totalBytes ? chunk.subarray(offset, offset + sendBytes) : chunk;
          await \u53D1\u9001\u539F\u59CB\u5757(view);
          offset += sendBytes;
          continue;
        }
        const copyBytes = Math.min(packetCap - pendingBytes, totalBytes - offset);
        pendingBuffer.set(chunk.subarray(offset, offset + copyBytes), pendingBytes);
        pendingBytes += copyBytes;
        offset += copyBytes;
        generation++;
        if (pendingBytes === packetCap || packetCap - pendingBytes < tailBytes) await flush();
        else scheduleFlush();
      }
    },
    flush
  };
}
__name(\u521B\u5EFA\u4E0B\u884CGrain\u53D1\u9001\u5668, "\u521B\u5EFA\u4E0B\u884CGrain\u53D1\u9001\u5668");
async function connectStreams(remoteSocket, webSocket, headerData, retryFunc) {
  let header = headerData, hasData = false, reader, useBYOB = false;
  const BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650 = 64 * 1024;
  const \u4E0B\u884C\u53D1\u9001\u5668 = \u521B\u5EFA\u4E0B\u884CGrain\u53D1\u9001\u5668(webSocket, header);
  header = null;
  try {
    reader = remoteSocket.readable.getReader({ mode: "byob" });
    useBYOB = true;
  } catch (e) {
    reader = remoteSocket.readable.getReader();
  }
  try {
    if (!useBYOB) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!value || value.byteLength === 0) continue;
        hasData = true;
        await \u4E0B\u884C\u53D1\u9001\u5668.\u53D1\u9001(value);
      }
    } else {
      let readBuffer = new ArrayBuffer(BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650);
      while (true) {
        const { done, value } = await reader.read(new Uint8Array(readBuffer, 0, BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650));
        if (done) break;
        if (!value || value.byteLength === 0) continue;
        hasData = true;
        if (value.byteLength >= \u4E0B\u884CGrain\u5305\u5B57\u8282) {
          await \u4E0B\u884C\u53D1\u9001\u5668.flush();
          await \u4E0B\u884C\u53D1\u9001\u5668.\u76F4\u63A5\u53D1\u9001(value);
          readBuffer = new ArrayBuffer(BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650);
        } else {
          await \u4E0B\u884C\u53D1\u9001\u5668.\u53D1\u9001(value);
          readBuffer = value.buffer.byteLength >= BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650 ? value.buffer : new ArrayBuffer(BYOB\u5355\u6B21\u8BFB\u53D6\u4E0A\u9650);
        }
      }
    }
    await \u4E0B\u884C\u53D1\u9001\u5668.flush();
  } catch (err) {
    closeSocketQuietly(webSocket);
  } finally {
    try {
      reader.cancel();
    } catch (e) {
    }
    try {
      reader.releaseLock();
    } catch (e) {
    }
  }
  if (!hasData && retryFunc) await retryFunc();
}
__name(connectStreams, "connectStreams");
function isSpeedTestSite(hostname) {
  const speedTestDomains = [atob("c3BlZWQuY2xvdWRmbGFyZS5jb20=")];
  if (speedTestDomains.includes(hostname)) {
    return true;
  }
  for (const domain of speedTestDomains) {
    if (hostname.endsWith("." + domain) || hostname === domain) {
      return true;
    }
  }
  return false;
}
__name(isSpeedTestSite, "isSpeedTestSite");
async function socks5Connect(targetHost, targetPort, initialData, TCP\u8FDE\u63A5) {
  const { username, password, hostname, port } = parsedSocks5Address;
  const socket = TCP\u8FDE\u63A5({ hostname, port }), writer = socket.writable.getWriter(), reader = socket.readable.getReader();
  try {
    const authMethods = username && password ? new Uint8Array([5, 2, 0, 2]) : new Uint8Array([5, 1, 0]);
    await writer.write(authMethods);
    let response = await reader.read();
    if (response.done || response.value.byteLength < 2) throw new Error("S5 method selection failed");
    const selectedMethod = new Uint8Array(response.value)[1];
    if (selectedMethod === 2) {
      if (!username || !password) throw new Error("S5 requires authentication");
      const userBytes = new TextEncoder().encode(username), passBytes = new TextEncoder().encode(password);
      const authPacket = new Uint8Array([1, userBytes.length, ...userBytes, passBytes.length, ...passBytes]);
      await writer.write(authPacket);
      response = await reader.read();
      if (response.done || new Uint8Array(response.value)[1] !== 0) throw new Error("S5 authentication failed");
    } else if (selectedMethod !== 0) throw new Error(`S5 unsupported auth method: ${selectedMethod}`);
    const hostBytes = new TextEncoder().encode(targetHost);
    const connectPacket = new Uint8Array([5, 1, 0, 3, hostBytes.length, ...hostBytes, targetPort >> 8, targetPort & 255]);
    await writer.write(connectPacket);
    response = await reader.read();
    if (response.done || new Uint8Array(response.value)[1] !== 0) throw new Error("S5 connection failed");
    if (\u6709\u6548\u6570\u636E\u957F\u5EA6(initialData) > 0) await writer.write(initialData);
    writer.releaseLock();
    reader.releaseLock();
    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {
    }
    try {
      reader.releaseLock();
    } catch (e) {
    }
    try {
      socket.close();
    } catch (e) {
    }
    throw error;
  }
}
__name(socks5Connect, "socks5Connect");
async function httpConnect(targetHost, targetPort, initialData, HTTPS\u4EE3\u7406 = false, TCP\u8FDE\u63A5) {
  const { username, password, hostname, port } = parsedSocks5Address;
  const socket = HTTPS\u4EE3\u7406 ? TCP\u8FDE\u63A5({ hostname, port }, { secureTransport: "on", allowHalfOpen: false }) : TCP\u8FDE\u63A5({ hostname, port });
  const writer = socket.writable.getWriter(), reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  try {
    if (HTTPS\u4EE3\u7406) await socket.opened;
    const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r
` : "";
    const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r
Host: ${targetHost}:${targetPort}\r
${auth}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;
    await writer.write(encoder.encode(request));
    writer.releaseLock();
    let responseBuffer = new Uint8Array(0), headerEndIndex = -1, bytesRead = 0;
    while (headerEndIndex === -1 && bytesRead < 8192) {
      const { done, value } = await reader.read();
      if (done || !value) throw new Error(`${HTTPS\u4EE3\u7406 ? "HTTPS" : "HTTP"} \u4EE3\u7406\u5728\u8FD4\u56DE CONNECT \u54CD\u5E94\u524D\u5173\u95ED\u8FDE\u63A5`);
      responseBuffer = new Uint8Array([...responseBuffer, ...value]);
      bytesRead = responseBuffer.length;
      const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 13 && responseBuffer[i + 1] === 10 && responseBuffer[i + 2] === 13 && responseBuffer[i + 3] === 10);
      if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
    }
    if (headerEndIndex === -1) throw new Error("\u4EE3\u7406 CONNECT \u54CD\u5E94\u5934\u8FC7\u957F\u6216\u65E0\u6548");
    const statusMatch = decoder.decode(responseBuffer.slice(0, headerEndIndex)).split("\r\n")[0].match(/HTTP\/\d\.\d\s+(\d+)/);
    const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
    if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`Connection failed: HTTP ${statusCode}`);
    reader.releaseLock();
    if (\u6709\u6548\u6570\u636E\u957F\u5EA6(initialData) > 0) {
      const \u8FDC\u7AEF\u5199\u5165\u5668 = socket.writable.getWriter();
      await \u8FDC\u7AEF\u5199\u5165\u5668.write(initialData);
      \u8FDC\u7AEF\u5199\u5165\u5668.releaseLock();
    }
    if (bytesRead > headerEndIndex) {
      const { readable, writable } = new TransformStream();
      const transformWriter = writable.getWriter();
      await transformWriter.write(responseBuffer.subarray(headerEndIndex, bytesRead));
      transformWriter.releaseLock();
      socket.readable.pipeTo(writable).catch(() => {
      });
      return { readable, writable: socket.writable, closed: socket.closed, close: /* @__PURE__ */ __name(() => socket.close(), "close") };
    }
    return socket;
  } catch (error) {
    try {
      writer.releaseLock();
    } catch (e) {
    }
    try {
      reader.releaseLock();
    } catch (e) {
    }
    try {
      socket.close();
    } catch (e) {
    }
    throw error;
  }
}
__name(httpConnect, "httpConnect");
async function httpsConnect(targetHost, targetPort, initialData, TCP\u8FDE\u63A5) {
  const { username, password, hostname, port } = parsedSocks5Address;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  let tlsSocket = null;
  const tlsServerName = isIPHostname(hostname) ? "" : stripIPv6Brackets(hostname);
  const \u6253\u5F00HTTPS\u4EE3\u7406TLS = /* @__PURE__ */ __name(async (allowChacha = false) => {
    const proxySocket = TCP\u8FDE\u63A5({ hostname, port });
    try {
      await proxySocket.opened;
      const socket = new TlsClient(proxySocket, { serverName: tlsServerName, insecure: true, allowChacha });
      await socket.handshake();
      log(`[HTTPS\u4EE3\u7406] TLS\u7248\u672C: ${socket.isTls13 ? "1.3" : "1.2"} | Cipher: 0x${socket.cipherSuite.toString(16)}${socket.cipherConfig?.chacha ? " (ChaCha20)" : " (AES-GCM)"}`);
      return socket;
    } catch (error) {
      try {
        proxySocket.close();
      } catch (e) {
      }
      throw error;
    }
  }, "\u6253\u5F00HTTPS\u4EE3\u7406TLS");
  try {
    try {
      tlsSocket = await \u6253\u5F00HTTPS\u4EE3\u7406TLS(false);
    } catch (error) {
      if (!/cipher|handshake|TLS Alert|ServerHello|Finished|Unsupported|Missing TLS/i.test(error?.message || `${error || ""}`)) throw error;
      log(`[HTTPS\u4EE3\u7406] AES-GCM TLS \u63E1\u624B\u5931\u8D25\uFF0C\u56DE\u9000 ChaCha20 \u517C\u5BB9\u6A21\u5F0F: ${error?.message || error}`);
      tlsSocket = await \u6253\u5F00HTTPS\u4EE3\u7406TLS(true);
    }
    const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r
` : "";
    const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r
Host: ${targetHost}:${targetPort}\r
${auth}User-Agent: Mozilla/5.0\r
Connection: keep-alive\r
\r
`;
    await tlsSocket.write(encoder.encode(request));
    let responseBuffer = new Uint8Array(0), headerEndIndex = -1, bytesRead = 0;
    while (headerEndIndex === -1 && bytesRead < 8192) {
      const value = await tlsSocket.read();
      if (!value) throw new Error("HTTPS \u4EE3\u7406\u5728\u8FD4\u56DE CONNECT \u54CD\u5E94\u524D\u5173\u95ED\u8FDE\u63A5");
      responseBuffer = \u62FC\u63A5\u5B57\u8282\u6570\u636E(responseBuffer, value);
      bytesRead = responseBuffer.length;
      const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 13 && responseBuffer[i + 1] === 10 && responseBuffer[i + 2] === 13 && responseBuffer[i + 3] === 10);
      if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
    }
    if (headerEndIndex === -1) throw new Error("HTTPS \u4EE3\u7406 CONNECT \u54CD\u5E94\u5934\u8FC7\u957F\u6216\u65E0\u6548");
    const statusMatch = decoder.decode(responseBuffer.slice(0, headerEndIndex)).split("\r\n")[0].match(/HTTP\/\d\.\d\s+(\d+)/);
    const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
    if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`Connection failed: HTTP ${statusCode}`);
    if (\u6709\u6548\u6570\u636E\u957F\u5EA6(initialData) > 0) await tlsSocket.write(\u6570\u636E\u8F6CUint8Array(initialData));
    const bufferedData = bytesRead > headerEndIndex ? responseBuffer.subarray(headerEndIndex, bytesRead) : null;
    let closedSettled = false, resolveClosed, rejectClosed;
    const settleClosed = /* @__PURE__ */ __name((settle, value) => {
      if (!closedSettled) {
        closedSettled = true;
        settle(value);
      }
    }, "settleClosed");
    const closed = new Promise((resolve, reject) => {
      resolveClosed = resolve;
      rejectClosed = reject;
    });
    const close = /* @__PURE__ */ __name(() => {
      try {
        tlsSocket.close();
      } catch (e) {
      }
      settleClosed(resolveClosed);
    }, "close");
    const readable = new ReadableStream({
      async start(controller) {
        try {
          if (\u6709\u6548\u6570\u636E\u957F\u5EA6(bufferedData) > 0) controller.enqueue(bufferedData);
          while (true) {
            const data = await tlsSocket.read();
            if (!data) break;
            if (data.byteLength > 0) controller.enqueue(data);
          }
          try {
            controller.close();
          } catch (e) {
          }
          settleClosed(resolveClosed);
        } catch (error) {
          try {
            controller.error(error);
          } catch (e) {
          }
          settleClosed(rejectClosed, error);
        }
      },
      cancel() {
        close();
      }
    });
    const writable = new WritableStream({
      async write(chunk) {
        await tlsSocket.write(\u6570\u636E\u8F6CUint8Array(chunk));
      },
      close,
      abort(error) {
        close();
        if (error) settleClosed(rejectClosed, error);
      }
    });
    return { readable, writable, closed, close };
  } catch (error) {
    try {
      tlsSocket?.close();
    } catch (e) {
    }
    throw error;
  }
}
__name(httpsConnect, "httpsConnect");
function \u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668(request) {
  const \u8BF7\u6C42\u5BF9\u8C61 = (
    /** @type {any} */
    request
  );
  const fetcher = \u8BF7\u6C42\u5BF9\u8C61?.fetcher;
  if (!fetcher || typeof fetcher.connect !== "function") throw new Error("request.fetcher.connect unavailable");
  return (options, init) => init === void 0 ? fetcher.connect(options) : fetcher.connect(options, init);
}
__name(\u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668, "\u521B\u5EFA\u8BF7\u6C42TCP\u8FDE\u63A5\u5668");
var TLS_VERSION_10 = 769;
var TLS_VERSION_12 = 771;
var TLS_VERSION_13 = 772;
var CONTENT_TYPE_CHANGE_CIPHER_SPEC = 20;
var CONTENT_TYPE_ALERT = 21;
var CONTENT_TYPE_HANDSHAKE = 22;
var CONTENT_TYPE_APPLICATION_DATA = 23;
var HANDSHAKE_TYPE_CLIENT_HELLO = 1;
var HANDSHAKE_TYPE_SERVER_HELLO = 2;
var HANDSHAKE_TYPE_NEW_SESSION_TICKET = 4;
var HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS = 8;
var HANDSHAKE_TYPE_CERTIFICATE = 11;
var HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE = 12;
var HANDSHAKE_TYPE_CERTIFICATE_REQUEST = 13;
var HANDSHAKE_TYPE_SERVER_HELLO_DONE = 14;
var HANDSHAKE_TYPE_CERTIFICATE_VERIFY = 15;
var HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE = 16;
var HANDSHAKE_TYPE_FINISHED = 20;
var HANDSHAKE_TYPE_KEY_UPDATE = 24;
var EXT_SERVER_NAME = 0;
var EXT_SUPPORTED_GROUPS = 10;
var EXT_EC_POINT_FORMATS = 11;
var EXT_SIGNATURE_ALGORITHMS = 13;
var EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION = 16;
var EXT_SUPPORTED_VERSIONS = 43;
var EXT_PSK_KEY_EXCHANGE_MODES = 45;
var EXT_KEY_SHARE = 51;
var ALERT_CLOSE_NOTIFY = 0;
var ALERT_LEVEL_WARNING = 1;
var ALERT_UNRECOGNIZED_NAME = 112;
var shouldIgnoreTlsAlert = /* @__PURE__ */ __name((fragment) => fragment?.[0] === ALERT_LEVEL_WARNING && fragment?.[1] === ALERT_UNRECOGNIZED_NAME, "shouldIgnoreTlsAlert");
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();
var EMPTY_BYTES = new Uint8Array(0);
var CIPHER_SUITES_BY_ID = /* @__PURE__ */ new Map([
  [4865, { id: 4865, keyLen: 16, ivLen: 12, hash: "SHA-256", tls13: true }],
  [4866, { id: 4866, keyLen: 32, ivLen: 12, hash: "SHA-384", tls13: true }],
  [4867, { id: 4867, keyLen: 32, ivLen: 12, hash: "SHA-256", tls13: true, chacha: true }],
  [49199, { id: 49199, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
  [49200, { id: 49200, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
  [52392, { id: 52392, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: true }],
  [49195, { id: 49195, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
  [49196, { id: 49196, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
  [52393, { id: 52393, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: true }]
]);
var GROUPS_BY_ID = /* @__PURE__ */ new Map([[29, "X25519"], [23, "P-256"]]);
var SUPPORTED_SIGNATURE_ALGORITHMS = [2052, 2053, 2054, 1025, 1281, 1537, 1027, 1283, 1539];
var tlsBytes = /* @__PURE__ */ __name((...parts) => {
  const flattenBytes = /* @__PURE__ */ __name((values) => values.flatMap((value) => value instanceof Uint8Array ? [...value] : Array.isArray(value) ? flattenBytes(value) : "number" == typeof value ? [value] : []), "flattenBytes");
  return new Uint8Array(flattenBytes(parts));
}, "tlsBytes");
var uint16be = /* @__PURE__ */ __name((value) => [value >> 8 & 255, 255 & value], "uint16be");
var readUint16 = /* @__PURE__ */ __name((buffer, offset) => buffer[offset] << 8 | buffer[offset + 1], "readUint16");
var readUint24 = /* @__PURE__ */ __name((buffer, offset) => buffer[offset] << 16 | buffer[offset + 1] << 8 | buffer[offset + 2], "readUint24");
var concatBytes = /* @__PURE__ */ __name((...chunks) => {
  const nonEmptyChunks = chunks.filter(((chunk) => chunk && chunk.length > 0)), length = nonEmptyChunks.reduce(((total, chunk) => total + chunk.length), 0), result = new Uint8Array(length);
  let offset = 0;
  for (const chunk of nonEmptyChunks) result.set(chunk, offset), offset += chunk.length;
  return result;
}, "concatBytes");
var randomBytes = /* @__PURE__ */ __name((length) => crypto.getRandomValues(new Uint8Array(length)), "randomBytes");
var constantTimeEqual = /* @__PURE__ */ __name((left, right) => {
  if (!left || !right || left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index++) diff |= left[index] ^ right[index];
  return 0 === diff;
}, "constantTimeEqual");
var hashByteLength = /* @__PURE__ */ __name((hash) => "SHA-512" === hash ? 64 : "SHA-384" === hash ? 48 : 32, "hashByteLength");
async function hmac(hash, key, data) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash }, false, ["sign"]);
  return new Uint8Array(await crypto.subtle.sign("HMAC", cryptoKey, data));
}
__name(hmac, "hmac");
async function digestBytes(hash, data) {
  return new Uint8Array(await crypto.subtle.digest(hash, data));
}
__name(digestBytes, "digestBytes");
async function tls12Prf(secret, label, seed, length, hash = "SHA-256") {
  const labelSeed = concatBytes(textEncoder.encode(label), seed);
  let output = new Uint8Array(0), currentA = labelSeed;
  for (; output.length < length; ) {
    currentA = await hmac(hash, secret, currentA);
    const block = await hmac(hash, secret, concatBytes(currentA, labelSeed));
    output = concatBytes(output, block);
  }
  return output.slice(0, length);
}
__name(tls12Prf, "tls12Prf");
async function hkdfExtract(hash, salt, inputKeyMaterial) {
  return salt && salt.length || (salt = new Uint8Array(hashByteLength(hash))), hmac(hash, salt, inputKeyMaterial);
}
__name(hkdfExtract, "hkdfExtract");
async function hkdfExpandLabel(hash, secret, label, context, length) {
  const fullLabel = textEncoder.encode("tls13 " + label);
  return (async function(hash2, secret2, info, length2) {
    const hashLen = hashByteLength(hash2), roundCount = Math.ceil(length2 / hashLen);
    let output = new Uint8Array(0), previousBlock = new Uint8Array(0);
    for (let round = 1; round <= roundCount; round++) previousBlock = await hmac(hash2, secret2, concatBytes(previousBlock, info, [round])), output = concatBytes(output, previousBlock);
    return output.slice(0, length2);
  })(hash, secret, tlsBytes(uint16be(length), fullLabel.length, fullLabel, context.length, context), length);
}
__name(hkdfExpandLabel, "hkdfExpandLabel");
async function generateKeyShare(group = "P-256") {
  const algorithm = "X25519" === group ? { name: "X25519" } : { name: "ECDH", namedCurve: group };
  const keyPair = (
    /** @type {CryptoKeyPair} */
    await crypto.subtle.generateKey(algorithm, true, ["deriveBits"])
  );
  const publicKeyRaw = (
    /** @type {ArrayBuffer} */
    await crypto.subtle.exportKey("raw", keyPair.publicKey)
  );
  return { keyPair, publicKeyRaw: new Uint8Array(publicKeyRaw) };
}
__name(generateKeyShare, "generateKeyShare");
async function deriveSharedSecret(privateKey, peerPublicKey, group = "P-256") {
  const algorithm = "X25519" === group ? { name: "X25519" } : { name: "ECDH", namedCurve: group }, peerKey = await crypto.subtle.importKey("raw", peerPublicKey, algorithm, false, []), bits = "P-384" === group ? 384 : "P-521" === group ? 528 : 256;
  return new Uint8Array(await crypto.subtle.deriveBits(
    /** @type {any} */
    { name: algorithm.name, public: peerKey },
    privateKey,
    bits
  ));
}
__name(deriveSharedSecret, "deriveSharedSecret");
async function importAesGcmKey(key, usages) {
  return crypto.subtle.importKey("raw", key, { name: "AES-GCM" }, false, usages);
}
__name(importAesGcmKey, "importAesGcmKey");
async function aesGcmEncryptWithKey(cryptoKey, initializationVector, plaintext, additionalData) {
  return new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: initializationVector, additionalData, tagLength: 128 }, cryptoKey, plaintext));
}
__name(aesGcmEncryptWithKey, "aesGcmEncryptWithKey");
async function aesGcmDecryptWithKey(cryptoKey, initializationVector, ciphertext, additionalData) {
  return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: initializationVector, additionalData, tagLength: 128 }, cryptoKey, ciphertext));
}
__name(aesGcmDecryptWithKey, "aesGcmDecryptWithKey");
function rotateLeft32(value, bits) {
  return (value << bits | value >>> 32 - bits) >>> 0;
}
__name(rotateLeft32, "rotateLeft32");
function chachaQuarterRound(state, indexA, indexB, indexC, indexD) {
  state[indexA] = state[indexA] + state[indexB] >>> 0, state[indexD] = rotateLeft32(state[indexD] ^ state[indexA], 16), state[indexC] = state[indexC] + state[indexD] >>> 0, state[indexB] = rotateLeft32(state[indexB] ^ state[indexC], 12), state[indexA] = state[indexA] + state[indexB] >>> 0, state[indexD] = rotateLeft32(state[indexD] ^ state[indexA], 8), state[indexC] = state[indexC] + state[indexD] >>> 0, state[indexB] = rotateLeft32(state[indexB] ^ state[indexC], 7);
}
__name(chachaQuarterRound, "chachaQuarterRound");
function chacha20Block(key, counter, nonce) {
  const state = new Uint32Array(16);
  state[0] = 1634760805, state[1] = 857760878, state[2] = 2036477234, state[3] = 1797285236;
  const keyView = new DataView(key.buffer, key.byteOffset, key.byteLength);
  for (let wordIndex = 0; wordIndex < 8; wordIndex++) state[4 + wordIndex] = keyView.getUint32(4 * wordIndex, true);
  state[12] = counter;
  const nonceView = new DataView(nonce.buffer, nonce.byteOffset, nonce.byteLength);
  state[13] = nonceView.getUint32(0, true), state[14] = nonceView.getUint32(4, true), state[15] = nonceView.getUint32(8, true);
  const workingState = new Uint32Array(state);
  for (let round = 0; round < 10; round++) chachaQuarterRound(workingState, 0, 4, 8, 12), chachaQuarterRound(workingState, 1, 5, 9, 13), chachaQuarterRound(workingState, 2, 6, 10, 14), chachaQuarterRound(workingState, 3, 7, 11, 15), chachaQuarterRound(workingState, 0, 5, 10, 15), chachaQuarterRound(workingState, 1, 6, 11, 12), chachaQuarterRound(workingState, 2, 7, 8, 13), chachaQuarterRound(workingState, 3, 4, 9, 14);
  for (let wordIndex = 0; wordIndex < 16; wordIndex++) workingState[wordIndex] = workingState[wordIndex] + state[wordIndex] >>> 0;
  return new Uint8Array(workingState.buffer.slice(0));
}
__name(chacha20Block, "chacha20Block");
function chacha20Xor(key, nonce, data) {
  const output = new Uint8Array(data.length);
  let counter = 1;
  for (let offset = 0; offset < data.length; offset += 64) {
    const block = chacha20Block(key, counter++, nonce), blockLength = Math.min(64, data.length - offset);
    for (let index = 0; index < blockLength; index++) output[offset + index] = data[offset + index] ^ block[index];
  }
  return output;
}
__name(chacha20Xor, "chacha20Xor");
function poly1305Mac(key, message) {
  const rKey = (function(rBytes) {
    const clamped = new Uint8Array(rBytes);
    return clamped[3] &= 15, clamped[7] &= 15, clamped[11] &= 15, clamped[15] &= 15, clamped[4] &= 252, clamped[8] &= 252, clamped[12] &= 252, clamped;
  })(key.slice(0, 16)), sKey = key.slice(16, 32);
  let accumulator = [0n, 0n, 0n, 0n, 0n];
  const rLimbs = [0x3ffffffn & BigInt(rKey[0] | rKey[1] << 8 | rKey[2] << 16 | rKey[3] << 24), 0x3ffffffn & BigInt(rKey[3] >> 2 | rKey[4] << 6 | rKey[5] << 14 | rKey[6] << 22), 0x3ffffffn & BigInt(rKey[6] >> 4 | rKey[7] << 4 | rKey[8] << 12 | rKey[9] << 20), 0x3ffffffn & BigInt(rKey[9] >> 6 | rKey[10] << 2 | rKey[11] << 10 | rKey[12] << 18), 0x3ffffffn & BigInt(rKey[13] | rKey[14] << 8 | rKey[15] << 16)];
  for (let offset = 0; offset < message.length; offset += 16) {
    const chunk = message.slice(offset, offset + 16), paddedChunk = new Uint8Array(17);
    paddedChunk.set(chunk), paddedChunk[chunk.length] = 1, accumulator[0] += BigInt(paddedChunk[0] | paddedChunk[1] << 8 | paddedChunk[2] << 16 | (3 & paddedChunk[3]) << 24), accumulator[1] += BigInt(paddedChunk[3] >> 2 | paddedChunk[4] << 6 | paddedChunk[5] << 14 | (15 & paddedChunk[6]) << 22), accumulator[2] += BigInt(paddedChunk[6] >> 4 | paddedChunk[7] << 4 | paddedChunk[8] << 12 | (63 & paddedChunk[9]) << 20), accumulator[3] += BigInt(paddedChunk[9] >> 6 | paddedChunk[10] << 2 | paddedChunk[11] << 10 | paddedChunk[12] << 18), accumulator[4] += BigInt(paddedChunk[13] | paddedChunk[14] << 8 | paddedChunk[15] << 16 | paddedChunk[16] << 24);
    const product = [0n, 0n, 0n, 0n, 0n];
    for (let accIndex = 0; accIndex < 5; accIndex++)
      for (let rIndex = 0; rIndex < 5; rIndex++) {
        const limbIndex = accIndex + rIndex;
        limbIndex < 5 ? product[limbIndex] += accumulator[accIndex] * rLimbs[rIndex] : product[limbIndex - 5] += accumulator[accIndex] * rLimbs[rIndex] * 5n;
      }
    let carry = 0n;
    for (let index = 0; index < 5; index++) product[index] += carry, accumulator[index] = 0x3ffffffn & product[index], carry = product[index] >> 26n;
    accumulator[0] += 5n * carry, carry = accumulator[0] >> 26n, accumulator[0] &= 0x3ffffffn, accumulator[1] += carry;
  }
  let tagValue = accumulator[0] | accumulator[1] << 26n | accumulator[2] << 52n | accumulator[3] << 78n | accumulator[4] << 104n;
  tagValue = tagValue + sKey.reduce(((total, byte, index) => total + (BigInt(byte) << BigInt(8 * index))), 0n) & (1n << 128n) - 1n;
  const tag = new Uint8Array(16);
  for (let index = 0; index < 16; index++) tag[index] = Number(tagValue >> BigInt(8 * index) & 0xffn);
  return tag;
}
__name(poly1305Mac, "poly1305Mac");
function chacha20Poly1305Encrypt(key, nonce, plaintext, additionalData) {
  const polyKey = chacha20Block(key, 0, nonce).slice(0, 32), ciphertext = chacha20Xor(key, nonce, plaintext), aadPadding = (16 - additionalData.length % 16) % 16, ciphertextPadding = (16 - ciphertext.length % 16) % 16, macData = new Uint8Array(additionalData.length + aadPadding + ciphertext.length + ciphertextPadding + 16);
  macData.set(additionalData, 0), macData.set(ciphertext, additionalData.length + aadPadding);
  const lengthView = new DataView(macData.buffer, additionalData.length + aadPadding + ciphertext.length + ciphertextPadding);
  lengthView.setBigUint64(0, BigInt(additionalData.length), true), lengthView.setBigUint64(8, BigInt(ciphertext.length), true);
  const tag = poly1305Mac(polyKey, macData);
  return concatBytes(ciphertext, tag);
}
__name(chacha20Poly1305Encrypt, "chacha20Poly1305Encrypt");
function chacha20Poly1305Decrypt(key, nonce, ciphertext, additionalData) {
  if (ciphertext.length < 16) throw new Error("Ciphertext too short");
  const tag = ciphertext.slice(-16), encryptedData = ciphertext.slice(0, -16), polyKey = chacha20Block(key, 0, nonce).slice(0, 32), aadPadding = (16 - additionalData.length % 16) % 16, ciphertextPadding = (16 - encryptedData.length % 16) % 16, macData = new Uint8Array(additionalData.length + aadPadding + encryptedData.length + ciphertextPadding + 16);
  macData.set(additionalData, 0), macData.set(encryptedData, additionalData.length + aadPadding);
  const lengthView = new DataView(macData.buffer, additionalData.length + aadPadding + encryptedData.length + ciphertextPadding);
  lengthView.setBigUint64(0, BigInt(additionalData.length), true), lengthView.setBigUint64(8, BigInt(encryptedData.length), true);
  const expectedTag = poly1305Mac(polyKey, macData);
  let diff = 0;
  for (let index = 0; index < 16; index++) diff |= tag[index] ^ expectedTag[index];
  if (0 !== diff) throw new Error("ChaCha20-Poly1305 authentication failed");
  return chacha20Xor(key, nonce, encryptedData);
}
__name(chacha20Poly1305Decrypt, "chacha20Poly1305Decrypt");
var TLS_MAX_PLAINTEXT_FRAGMENT = 16 * 1024;
function buildTlsRecord(contentType, fragment, version = TLS_VERSION_12) {
  const data = \u6570\u636E\u8F6CUint8Array(fragment);
  const record = new Uint8Array(5 + data.byteLength);
  record[0] = contentType;
  record[1] = version >> 8 & 255;
  record[2] = version & 255;
  record[3] = data.byteLength >> 8 & 255;
  record[4] = data.byteLength & 255;
  record.set(data, 5);
  return record;
}
__name(buildTlsRecord, "buildTlsRecord");
function buildHandshakeMessage(handshakeType, body) {
  return tlsBytes(handshakeType, ((length) => [length >> 16 & 255, length >> 8 & 255, 255 & length])(body.length), body);
}
__name(buildHandshakeMessage, "buildHandshakeMessage");
var TlsRecordParser = class {
  static {
    __name(this, "TlsRecordParser");
  }
  constructor() {
    this.buffer = new Uint8Array(0);
  }
  feed(chunk) {
    const bytes = \u6570\u636E\u8F6CUint8Array(chunk);
    this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes;
  }
  next() {
    if (this.buffer.length < 5) return null;
    const contentType = this.buffer[0], version = readUint16(this.buffer, 1), length = readUint16(this.buffer, 3);
    if (this.buffer.length < 5 + length) return null;
    const fragment = this.buffer.subarray(5, 5 + length);
    return this.buffer = this.buffer.subarray(5 + length), { type: contentType, version, length, fragment };
  }
};
var TlsHandshakeParser = class {
  static {
    __name(this, "TlsHandshakeParser");
  }
  constructor() {
    this.buffer = new Uint8Array(0);
  }
  feed(chunk) {
    const bytes = \u6570\u636E\u8F6CUint8Array(chunk);
    this.buffer = this.buffer.length ? concatBytes(this.buffer, bytes) : bytes;
  }
  next() {
    if (this.buffer.length < 4) return null;
    const handshakeType = this.buffer[0], length = readUint24(this.buffer, 1);
    if (this.buffer.length < 4 + length) return null;
    const body = this.buffer.subarray(4, 4 + length), raw = this.buffer.subarray(0, 4 + length);
    return this.buffer = this.buffer.subarray(4 + length), { type: handshakeType, length, body, raw };
  }
};
function parseServerHello(body) {
  let offset = 0;
  const legacyVersion = readUint16(body, offset);
  offset += 2;
  const serverRandom = body.slice(offset, offset + 32);
  offset += 32;
  const sessionIdLength = body[offset++], sessionId = body.slice(offset, offset + sessionIdLength);
  offset += sessionIdLength;
  const cipherSuite = readUint16(body, offset);
  offset += 2;
  const compression = body[offset++];
  let selectedVersion = legacyVersion, keyShare = null, alpn = null;
  if (offset < body.length) {
    const extensionsLength = readUint16(body, offset);
    offset += 2;
    const extensionsEnd = offset + extensionsLength;
    for (; offset + 4 <= extensionsEnd; ) {
      const extensionType = readUint16(body, offset);
      offset += 2;
      const extensionLength = readUint16(body, offset);
      offset += 2;
      const extensionData = body.slice(offset, offset + extensionLength);
      if (offset += extensionLength, extensionType === EXT_SUPPORTED_VERSIONS && extensionLength >= 2) selectedVersion = readUint16(extensionData, 0);
      else if (extensionType === EXT_KEY_SHARE && extensionLength >= 4) {
        const group = readUint16(extensionData, 0), keyLength = readUint16(extensionData, 2);
        keyShare = { group, key: extensionData.slice(4, 4 + keyLength) };
      } else extensionType === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION && extensionLength >= 3 && (alpn = textDecoder.decode(extensionData.slice(3, 3 + extensionData[2])));
    }
  }
  const helloRetryRequestRandom = new Uint8Array([207, 33, 173, 116, 229, 154, 97, 17, 190, 29, 140, 2, 30, 101, 184, 145, 194, 162, 17, 22, 122, 187, 140, 94, 7, 158, 9, 226, 200, 168, 51, 156]);
  return { version: legacyVersion, serverRandom, sessionId, cipherSuite, compression, selectedVersion, keyShare, alpn, isHRR: constantTimeEqual(serverRandom, helloRetryRequestRandom), isTls13: selectedVersion === TLS_VERSION_13 };
}
__name(parseServerHello, "parseServerHello");
function parseServerKeyExchange(body) {
  let offset = 1;
  const namedCurve = readUint16(body, offset);
  offset += 2;
  const keyLength = body[offset++];
  return { namedCurve, serverPublicKey: body.slice(offset, offset + keyLength) };
}
__name(parseServerKeyExchange, "parseServerKeyExchange");
function extractLeafCertificate(body, hasContext = 0) {
  let offset = 0;
  if (hasContext) {
    const contextLength = body[offset++];
    offset += contextLength;
  }
  if (offset + 3 > body.length) return null;
  const certificateListLength = readUint24(body, offset);
  if (offset += 3, !certificateListLength || offset + 3 > body.length) return null;
  const certificateLength = readUint24(body, offset);
  return offset += 3, certificateLength ? body.slice(offset, offset + certificateLength) : null;
}
__name(extractLeafCertificate, "extractLeafCertificate");
function parseEncryptedExtensions(body) {
  const parsed = { alpn: null };
  let offset = 2;
  const extensionsEnd = 2 + readUint16(body, 0);
  for (; offset + 4 <= extensionsEnd; ) {
    const extensionType = readUint16(body, offset);
    offset += 2;
    const extensionLength = readUint16(body, offset);
    if (offset += 2, extensionType === EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION && extensionLength >= 3) {
      const protocolLength = body[offset + 2];
      protocolLength > 0 && offset + 3 + protocolLength <= offset + extensionLength && (parsed.alpn = textDecoder.decode(body.slice(offset + 3, offset + 3 + protocolLength)));
    }
    offset += extensionLength;
  }
  return parsed;
}
__name(parseEncryptedExtensions, "parseEncryptedExtensions");
function buildClientHello(clientRandom, serverName, keyShares, { tls13: enableTls13 = true, tls12: enableTls12 = true, alpn = null, chacha = true } = {}) {
  const cipherIds = [];
  enableTls13 && cipherIds.push(4865, 4866, ...chacha ? [4867] : []), enableTls12 && cipherIds.push(49199, 49200, 49195, 49196, ...chacha ? [52392, 52393] : []);
  const cipherBytes = tlsBytes(...cipherIds.flatMap(uint16be)), extensions = [tlsBytes(255, 1, 0, 1, 0)];
  if (serverName) {
    const serverNameBytes = textEncoder.encode(serverName), serverNameList = tlsBytes(0, uint16be(serverNameBytes.length), serverNameBytes);
    extensions.push(tlsBytes(uint16be(EXT_SERVER_NAME), uint16be(serverNameList.length + 2), uint16be(serverNameList.length), serverNameList));
  }
  extensions.push(tlsBytes(uint16be(EXT_EC_POINT_FORMATS), 0, 2, 1, 0)), extensions.push(tlsBytes(uint16be(EXT_SUPPORTED_GROUPS), 0, 6, 0, 4, 0, 29, 0, 23));
  const signatureBytes = tlsBytes(...SUPPORTED_SIGNATURE_ALGORITHMS.flatMap(uint16be));
  extensions.push(tlsBytes(uint16be(EXT_SIGNATURE_ALGORITHMS), uint16be(signatureBytes.length + 2), uint16be(signatureBytes.length), signatureBytes));
  const protocols = Array.isArray(alpn) ? alpn.filter(Boolean) : alpn ? [alpn] : [];
  if (protocols.length) {
    const alpnBytes = concatBytes(...protocols.map(((protocol) => {
      const protocolBytes = textEncoder.encode(protocol);
      return tlsBytes(protocolBytes.length, protocolBytes);
    })));
    extensions.push(tlsBytes(uint16be(EXT_APPLICATION_LAYER_PROTOCOL_NEGOTIATION), uint16be(alpnBytes.length + 2), uint16be(alpnBytes.length), alpnBytes));
  }
  if (enableTls13 && keyShares) {
    let keyShareBytes;
    if (extensions.push(enableTls12 ? tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0, 5, 4, 3, 4, 3, 3) : tlsBytes(uint16be(EXT_SUPPORTED_VERSIONS), 0, 3, 2, 3, 4)), extensions.push(tlsBytes(uint16be(EXT_PSK_KEY_EXCHANGE_MODES), 0, 2, 1, 1)), keyShares?.x25519 && keyShares?.p256) keyShareBytes = concatBytes(tlsBytes(0, 29, uint16be(keyShares.x25519.length), keyShares.x25519), tlsBytes(0, 23, uint16be(keyShares.p256.length), keyShares.p256));
    else if (keyShares?.x25519) keyShareBytes = tlsBytes(0, 29, uint16be(keyShares.x25519.length), keyShares.x25519);
    else if (keyShares?.p256) keyShareBytes = tlsBytes(0, 23, uint16be(keyShares.p256.length), keyShares.p256);
    else {
      if (!(keyShares instanceof Uint8Array)) throw new Error("Invalid keyShares");
      keyShareBytes = tlsBytes(0, 23, uint16be(keyShares.length), keyShares);
    }
    extensions.push(tlsBytes(uint16be(EXT_KEY_SHARE), uint16be(keyShareBytes.length + 2), uint16be(keyShareBytes.length), keyShareBytes));
  }
  const extensionsBytes = concatBytes(...extensions);
  return buildHandshakeMessage(HANDSHAKE_TYPE_CLIENT_HELLO, tlsBytes(uint16be(TLS_VERSION_12), clientRandom, 0, uint16be(cipherBytes.length), cipherBytes, 1, 0, uint16be(extensionsBytes.length), extensionsBytes));
}
__name(buildClientHello, "buildClientHello");
var uint64be = /* @__PURE__ */ __name((sequenceNumber) => {
  const bytes = new Uint8Array(8);
  return new DataView(bytes.buffer).setBigUint64(0, sequenceNumber, false), bytes;
}, "uint64be");
var xorSequenceIntoIv = /* @__PURE__ */ __name((initializationVector, sequenceNumber) => {
  const nonce = initializationVector.slice(), sequenceBytes = uint64be(sequenceNumber);
  for (let index = 0; index < 8; index++) nonce[nonce.length - 8 + index] ^= sequenceBytes[index];
  return nonce;
}, "xorSequenceIntoIv");
var deriveTrafficKeys = /* @__PURE__ */ __name((hash, secret, keyLen, ivLen) => Promise.all([hkdfExpandLabel(hash, secret, "key", EMPTY_BYTES, keyLen), hkdfExpandLabel(hash, secret, "iv", EMPTY_BYTES, ivLen)]), "deriveTrafficKeys");
var TlsClient = class {
  static {
    __name(this, "TlsClient");
  }
  constructor(socket, options = {}) {
    if (this.socket = socket, this.serverName = options.serverName || "", this.supportTls13 = false !== options.tls13, this.supportTls12 = false !== options.tls12, !this.supportTls13 && !this.supportTls12) throw new Error("At least one TLS version must be enabled");
    this.alpnProtocols = Array.isArray(options.alpn) ? options.alpn : options.alpn ? [options.alpn] : null, this.allowChacha = options.allowChacha !== false, this.timeout = options.timeout ?? 3e4, this.clientRandom = randomBytes(32), this.serverRandom = null, this.handshakeChunks = [], this.handshakeComplete = false, this.negotiatedAlpn = null, this.cipherSuite = null, this.cipherConfig = null, this.isTls13 = false, this.masterSecret = null, this.handshakeSecret = null, this.clientWriteKey = null, this.serverWriteKey = null, this.clientWriteIv = null, this.serverWriteIv = null, this.clientHandshakeKey = null, this.serverHandshakeKey = null, this.clientHandshakeIv = null, this.serverHandshakeIv = null, this.clientAppKey = null, this.serverAppKey = null, this.clientAppIv = null, this.serverAppIv = null, this.clientWriteCryptoKey = null, this.serverWriteCryptoKey = null, this.clientHandshakeCryptoKey = null, this.serverHandshakeCryptoKey = null, this.clientAppCryptoKey = null, this.serverAppCryptoKey = null, this.clientSeqNum = 0n, this.serverSeqNum = 0n, this.recordParser = new TlsRecordParser(), this.handshakeParser = new TlsHandshakeParser(), this.keyPairs = /* @__PURE__ */ new Map(), this.ecdhKeyPair = null, this.sawCert = false;
  }
  recordHandshake(chunk) {
    this.handshakeChunks.push(chunk);
  }
  transcript() {
    return 1 === this.handshakeChunks.length ? this.handshakeChunks[0] : concatBytes(...this.handshakeChunks);
  }
  getCipherConfig(cipherSuite) {
    return CIPHER_SUITES_BY_ID.get(cipherSuite) || null;
  }
  async readChunk(reader) {
    return this.timeout ? Promise.race([reader.read(), new Promise(((resolve, reject) => setTimeout((() => reject(new Error("TLS read timeout"))), this.timeout)))]) : reader.read();
  }
  async readRecordsUntil(reader, predicate, closedError) {
    for (; ; ) {
      let record;
      for (; record = this.recordParser.next(); )
        if (await predicate(record)) return;
      const { value, done } = await this.readChunk(reader);
      if (done) throw new Error(closedError);
      this.recordParser.feed(value);
    }
  }
  async readHandshakeUntil(reader, predicate, closedError) {
    for (let message; message = this.handshakeParser.next(); )
      if (await predicate(message)) return;
    return this.readRecordsUntil(reader, (async (record) => {
      if (record.type === CONTENT_TYPE_ALERT) {
        if (shouldIgnoreTlsAlert(record.fragment)) return;
        throw new Error(`TLS Alert: ${record.fragment[1]}`);
      }
      if (record.type === CONTENT_TYPE_HANDSHAKE) {
        this.handshakeParser.feed(record.fragment);
        for (let message; message = this.handshakeParser.next(); )
          if (await predicate(message)) return 1;
      }
    }), closedError);
  }
  async acceptCertificate(certificate) {
    if (!certificate?.length) throw new Error("Empty certificate");
    this.sawCert = true;
  }
  async handshake() {
    const [p256Share, x25519Share] = await Promise.all([generateKeyShare("P-256"), generateKeyShare("X25519")]);
    this.keyPairs = /* @__PURE__ */ new Map([[23, p256Share], [29, x25519Share]]), this.ecdhKeyPair = p256Share.keyPair;
    const reader = this.socket.readable.getReader(), writer = this.socket.writable.getWriter();
    try {
      const clientHello = buildClientHello(this.clientRandom, this.serverName, { x25519: x25519Share.publicKeyRaw, p256: p256Share.publicKeyRaw }, { tls13: this.supportTls13, tls12: this.supportTls12, alpn: this.alpnProtocols, chacha: this.allowChacha });
      this.recordHandshake(clientHello), await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, clientHello, TLS_VERSION_10));
      const serverHello = await this.receiveServerHello(reader);
      if (serverHello.isHRR) throw new Error("HelloRetryRequest is not supported by TLSClientMini");
      if (serverHello.keyShare?.group && this.keyPairs.has(serverHello.keyShare.group)) {
        const selectedKeyPair = this.keyPairs.get(serverHello.keyShare.group);
        this.ecdhKeyPair = selectedKeyPair.keyPair;
      }
      serverHello.isTls13 ? await this.handshakeTls13(reader, writer, serverHello) : await this.handshakeTls12(reader, writer), this.handshakeComplete = true;
    } finally {
      reader.releaseLock(), writer.releaseLock();
    }
  }
  async receiveServerHello(reader) {
    for (; ; ) {
      const { value, done } = await this.readChunk(reader);
      if (done) throw new Error("Connection closed waiting for ServerHello");
      let record;
      for (this.recordParser.feed(value); record = this.recordParser.next(); ) {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (shouldIgnoreTlsAlert(record.fragment)) continue;
          throw new Error(`TLS Alert: level=${record.fragment[0]}, desc=${record.fragment[1]}`);
        }
        if (record.type !== CONTENT_TYPE_HANDSHAKE) continue;
        let message;
        for (this.handshakeParser.feed(record.fragment); message = this.handshakeParser.next(); ) {
          if (message.type !== HANDSHAKE_TYPE_SERVER_HELLO) continue;
          this.recordHandshake(message.raw);
          const serverHello = parseServerHello(message.body);
          if (this.serverRandom = serverHello.serverRandom, this.cipherSuite = serverHello.cipherSuite, this.cipherConfig = this.getCipherConfig(serverHello.cipherSuite), this.isTls13 = serverHello.isTls13, this.negotiatedAlpn = serverHello.alpn || null, !this.cipherConfig) throw new Error(`Unsupported cipher suite: 0x${serverHello.cipherSuite.toString(16)}`);
          return serverHello;
        }
      }
    }
  }
  async handshakeTls12(reader, writer) {
    let serverKeyExchange = null;
    let sawServerHelloDone = false;
    if (await this.readHandshakeUntil(reader, (async (message) => {
      switch (message.type) {
        case HANDSHAKE_TYPE_CERTIFICATE: {
          this.recordHandshake(message.raw);
          const certificate = extractLeafCertificate(message.body, 1);
          if (!certificate) throw new Error("Missing TLS 1.2 certificate");
          await this.acceptCertificate(certificate);
          break;
        }
        case HANDSHAKE_TYPE_SERVER_KEY_EXCHANGE:
          this.recordHandshake(message.raw), serverKeyExchange = parseServerKeyExchange(message.body);
          break;
        case HANDSHAKE_TYPE_SERVER_HELLO_DONE:
          return this.recordHandshake(message.raw), sawServerHelloDone = true, 1;
        case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
          throw new Error("Client certificate is not supported");
        default:
          this.recordHandshake(message.raw);
      }
    }), "Connection closed during TLS 1.2 handshake"), !this.sawCert) throw new Error("Missing TLS 1.2 leaf certificate");
    const serverKeyExchangeData = (
      /** @type {{ namedCurve: number, serverPublicKey: Uint8Array } | null} */
      serverKeyExchange
    );
    if (!serverKeyExchangeData) throw new Error("Missing TLS 1.2 ServerKeyExchange");
    const curveName = GROUPS_BY_ID.get(serverKeyExchangeData.namedCurve);
    if (!curveName) throw new Error(`Unsupported named curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
    const keyShare = this.keyPairs.get(serverKeyExchangeData.namedCurve);
    if (!keyShare) throw new Error(`Missing key pair for curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
    const preMasterSecret = await deriveSharedSecret(keyShare.keyPair.privateKey, serverKeyExchangeData.serverPublicKey, curveName), clientKeyExchange = buildHandshakeMessage(HANDSHAKE_TYPE_CLIENT_KEY_EXCHANGE, tlsBytes(keyShare.publicKeyRaw.length, keyShare.publicKeyRaw));
    this.recordHandshake(clientKeyExchange);
    const hashName = this.cipherConfig.hash;
    this.masterSecret = await tls12Prf(preMasterSecret, "master secret", concatBytes(this.clientRandom, this.serverRandom), 48, hashName);
    const keyLen = this.cipherConfig.keyLen, ivLen = this.cipherConfig.ivLen, keyBlock = await tls12Prf(this.masterSecret, "key expansion", concatBytes(this.serverRandom, this.clientRandom), 2 * keyLen + 2 * ivLen, hashName);
    this.clientWriteKey = keyBlock.slice(0, keyLen), this.serverWriteKey = keyBlock.slice(keyLen, 2 * keyLen), this.clientWriteIv = keyBlock.slice(2 * keyLen, 2 * keyLen + ivLen), this.serverWriteIv = keyBlock.slice(2 * keyLen + ivLen, 2 * keyLen + 2 * ivLen);
    if (!this.cipherConfig.chacha) [this.clientWriteCryptoKey, this.serverWriteCryptoKey] = await Promise.all([importAesGcmKey(this.clientWriteKey, ["encrypt"]), importAesGcmKey(this.serverWriteKey, ["decrypt"])]);
    await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, clientKeyExchange)), await writer.write(buildTlsRecord(CONTENT_TYPE_CHANGE_CIPHER_SPEC, tlsBytes(1)));
    const clientVerifyData = await tls12Prf(this.masterSecret, "client finished", await digestBytes(hashName, this.transcript()), 12, hashName), finishedMessage = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, clientVerifyData);
    this.recordHandshake(finishedMessage), await writer.write(buildTlsRecord(CONTENT_TYPE_HANDSHAKE, await this.encryptTls12(finishedMessage, CONTENT_TYPE_HANDSHAKE)));
    let sawChangeCipherSpec = false;
    await this.readRecordsUntil(reader, (async (record) => {
      if (record.type === CONTENT_TYPE_ALERT) {
        if (shouldIgnoreTlsAlert(record.fragment)) return;
        throw new Error(`TLS Alert: ${record.fragment[1]}`);
      }
      if (record.type === CONTENT_TYPE_CHANGE_CIPHER_SPEC) return void (sawChangeCipherSpec = true);
      if (record.type !== CONTENT_TYPE_HANDSHAKE || !sawChangeCipherSpec) return;
      const decrypted = await this.decryptTls12(record.fragment, CONTENT_TYPE_HANDSHAKE);
      if (decrypted[0] !== HANDSHAKE_TYPE_FINISHED) return;
      const verifyLength = readUint24(decrypted, 1), verifyData = decrypted.slice(4, 4 + verifyLength), expectedVerifyData = await tls12Prf(this.masterSecret, "server finished", await digestBytes(hashName, this.transcript()), 12, hashName);
      if (!constantTimeEqual(verifyData, expectedVerifyData)) throw new Error("TLS 1.2 server Finished verify failed");
      return 1;
    }), "Connection closed waiting for TLS 1.2 Finished");
  }
  async handshakeTls13(reader, writer, serverHello) {
    const groupName = GROUPS_BY_ID.get(serverHello.keyShare?.group);
    if (!groupName || !serverHello.keyShare?.key?.length) throw new Error("Missing TLS 1.3 key_share");
    const hashName = this.cipherConfig.hash, hashLen = hashByteLength(hashName), keyLen = this.cipherConfig.keyLen, ivLen = this.cipherConfig.ivLen, sharedSecret = await deriveSharedSecret(this.ecdhKeyPair.privateKey, serverHello.keyShare.key, groupName), earlySecret = await hkdfExtract(hashName, null, new Uint8Array(hashLen)), derivedSecret = await hkdfExpandLabel(hashName, earlySecret, "derived", await digestBytes(hashName, EMPTY_BYTES), hashLen);
    this.handshakeSecret = await hkdfExtract(hashName, derivedSecret, sharedSecret);
    const transcriptHash = await digestBytes(hashName, this.transcript()), clientHandshakeTrafficSecret = await hkdfExpandLabel(hashName, this.handshakeSecret, "c hs traffic", transcriptHash, hashLen), serverHandshakeTrafficSecret = await hkdfExpandLabel(hashName, this.handshakeSecret, "s hs traffic", transcriptHash, hashLen);
    [this.clientHandshakeKey, this.clientHandshakeIv] = await deriveTrafficKeys(hashName, clientHandshakeTrafficSecret, keyLen, ivLen), [this.serverHandshakeKey, this.serverHandshakeIv] = await deriveTrafficKeys(hashName, serverHandshakeTrafficSecret, keyLen, ivLen);
    if (!this.cipherConfig.chacha) [this.clientHandshakeCryptoKey, this.serverHandshakeCryptoKey] = await Promise.all([importAesGcmKey(this.clientHandshakeKey, ["encrypt"]), importAesGcmKey(this.serverHandshakeKey, ["decrypt"])]);
    const serverFinishedKey = await hkdfExpandLabel(hashName, serverHandshakeTrafficSecret, "finished", EMPTY_BYTES, hashLen);
    let serverFinishedReceived = false;
    const handleHandshakeMessage = /* @__PURE__ */ __name(async (message) => {
      switch (message.type) {
        case HANDSHAKE_TYPE_ENCRYPTED_EXTENSIONS: {
          const encryptedExtensions = parseEncryptedExtensions(message.body);
          encryptedExtensions.alpn && (this.negotiatedAlpn = encryptedExtensions.alpn), this.recordHandshake(message.raw);
          break;
        }
        case HANDSHAKE_TYPE_CERTIFICATE: {
          const certificate = extractLeafCertificate(message.body);
          if (!certificate) throw new Error("Missing TLS 1.3 certificate");
          await this.acceptCertificate(certificate), this.recordHandshake(message.raw);
          break;
        }
        case HANDSHAKE_TYPE_CERTIFICATE_REQUEST:
          throw new Error("Client certificate is not supported");
        case HANDSHAKE_TYPE_CERTIFICATE_VERIFY:
          this.recordHandshake(message.raw);
          break;
        case HANDSHAKE_TYPE_FINISHED: {
          const expectedVerifyData = await hmac(hashName, serverFinishedKey, await digestBytes(hashName, this.transcript()));
          if (!constantTimeEqual(expectedVerifyData, message.body)) throw new Error("TLS 1.3 server Finished verify failed");
          this.recordHandshake(message.raw), serverFinishedReceived = true;
          break;
        }
        default:
          this.recordHandshake(message.raw);
      }
    }, "handleHandshakeMessage");
    await this.readRecordsUntil(reader, (async (record) => {
      if (record.type === CONTENT_TYPE_CHANGE_CIPHER_SPEC || record.type === CONTENT_TYPE_HANDSHAKE) return;
      if (record.type === CONTENT_TYPE_ALERT) {
        if (shouldIgnoreTlsAlert(record.fragment)) return;
        throw new Error(`TLS Alert: ${record.fragment[1]}`);
      }
      if (record.type !== CONTENT_TYPE_APPLICATION_DATA) return;
      const decrypted = await this.decryptTls13Handshake(record.fragment), innerType = decrypted[decrypted.length - 1], plaintext = decrypted.slice(0, -1);
      if (innerType === CONTENT_TYPE_HANDSHAKE) {
        this.handshakeParser.feed(plaintext);
        for (let message; message = this.handshakeParser.next(); )
          if (await handleHandshakeMessage(message), serverFinishedReceived) return 1;
      }
    }), "Connection closed during TLS 1.3 handshake");
    const applicationTranscriptHash = await digestBytes(hashName, this.transcript()), masterDerivedSecret = await hkdfExpandLabel(hashName, this.handshakeSecret, "derived", await digestBytes(hashName, EMPTY_BYTES), hashLen), masterSecret = await hkdfExtract(hashName, masterDerivedSecret, new Uint8Array(hashLen)), clientAppTrafficSecret = await hkdfExpandLabel(hashName, masterSecret, "c ap traffic", applicationTranscriptHash, hashLen), serverAppTrafficSecret = await hkdfExpandLabel(hashName, masterSecret, "s ap traffic", applicationTranscriptHash, hashLen);
    [this.clientAppKey, this.clientAppIv] = await deriveTrafficKeys(hashName, clientAppTrafficSecret, keyLen, ivLen), [this.serverAppKey, this.serverAppIv] = await deriveTrafficKeys(hashName, serverAppTrafficSecret, keyLen, ivLen);
    if (!this.cipherConfig.chacha) [this.clientAppCryptoKey, this.serverAppCryptoKey] = await Promise.all([importAesGcmKey(this.clientAppKey, ["encrypt"]), importAesGcmKey(this.serverAppKey, ["decrypt"])]);
    const clientFinishedKey = await hkdfExpandLabel(hashName, clientHandshakeTrafficSecret, "finished", EMPTY_BYTES, hashLen), clientFinishedVerifyData = await hmac(hashName, clientFinishedKey, await digestBytes(hashName, this.transcript())), clientFinishedMessage = buildHandshakeMessage(HANDSHAKE_TYPE_FINISHED, clientFinishedVerifyData);
    this.recordHandshake(clientFinishedMessage), await writer.write(buildTlsRecord(CONTENT_TYPE_APPLICATION_DATA, await this.encryptTls13Handshake(concatBytes(clientFinishedMessage, [CONTENT_TYPE_HANDSHAKE])))), this.clientSeqNum = 0n, this.serverSeqNum = 0n;
  }
  async encryptTls12(plaintext, contentType) {
    const sequenceNumber = this.clientSeqNum++, sequenceBytes = uint64be(sequenceNumber), additionalData = concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(plaintext.length));
    if (this.cipherConfig.chacha) {
      const nonce = xorSequenceIntoIv(this.clientWriteIv, sequenceNumber);
      return chacha20Poly1305Encrypt(this.clientWriteKey, nonce, plaintext, additionalData);
    }
    const explicitNonce = randomBytes(8);
    if (!this.clientWriteCryptoKey) this.clientWriteCryptoKey = await importAesGcmKey(this.clientWriteKey, ["encrypt"]);
    return concatBytes(explicitNonce, await aesGcmEncryptWithKey(this.clientWriteCryptoKey, concatBytes(this.clientWriteIv, explicitNonce), plaintext, additionalData));
  }
  async decryptTls12(ciphertext, contentType) {
    const sequenceNumber = this.serverSeqNum++, sequenceBytes = uint64be(sequenceNumber);
    if (this.cipherConfig.chacha) {
      const nonce = xorSequenceIntoIv(this.serverWriteIv, sequenceNumber);
      return chacha20Poly1305Decrypt(this.serverWriteKey, nonce, ciphertext, concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(ciphertext.length - 16)));
    }
    const explicitNonce = ciphertext.subarray(0, 8), encryptedData = ciphertext.subarray(8);
    if (!this.serverWriteCryptoKey) this.serverWriteCryptoKey = await importAesGcmKey(this.serverWriteKey, ["decrypt"]);
    return aesGcmDecryptWithKey(this.serverWriteCryptoKey, concatBytes(this.serverWriteIv, explicitNonce), encryptedData, concatBytes(sequenceBytes, [contentType], uint16be(TLS_VERSION_12), uint16be(encryptedData.length - 16)));
  }
  async encryptTls13Handshake(plaintext) {
    const nonce = xorSequenceIntoIv(this.clientHandshakeIv, this.clientSeqNum++), additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(plaintext.length + 16));
    if (this.cipherConfig.chacha) return chacha20Poly1305Encrypt(this.clientHandshakeKey, nonce, plaintext, additionalData);
    if (!this.clientHandshakeCryptoKey) this.clientHandshakeCryptoKey = await importAesGcmKey(this.clientHandshakeKey, ["encrypt"]);
    return aesGcmEncryptWithKey(this.clientHandshakeCryptoKey, nonce, plaintext, additionalData);
  }
  async decryptTls13Handshake(ciphertext) {
    const nonce = xorSequenceIntoIv(this.serverHandshakeIv, this.serverSeqNum++), additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(ciphertext.length));
    const decrypted = this.cipherConfig.chacha ? await chacha20Poly1305Decrypt(this.serverHandshakeKey, nonce, ciphertext, additionalData) : await aesGcmDecryptWithKey(this.serverHandshakeCryptoKey || (this.serverHandshakeCryptoKey = await importAesGcmKey(this.serverHandshakeKey, ["decrypt"])), nonce, ciphertext, additionalData);
    let innerTypeIndex = decrypted.length - 1;
    for (; innerTypeIndex >= 0 && !decrypted[innerTypeIndex]; ) innerTypeIndex--;
    return innerTypeIndex < 0 ? EMPTY_BYTES : decrypted.slice(0, innerTypeIndex + 1);
  }
  async encryptTls13(data) {
    const plaintext = concatBytes(data, [CONTENT_TYPE_APPLICATION_DATA]), nonce = xorSequenceIntoIv(this.clientAppIv, this.clientSeqNum++), additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(plaintext.length + 16));
    if (this.cipherConfig.chacha) return chacha20Poly1305Encrypt(this.clientAppKey, nonce, plaintext, additionalData);
    if (!this.clientAppCryptoKey) this.clientAppCryptoKey = await importAesGcmKey(this.clientAppKey, ["encrypt"]);
    return aesGcmEncryptWithKey(this.clientAppCryptoKey, nonce, plaintext, additionalData);
  }
  async decryptTls13(ciphertext) {
    const nonce = xorSequenceIntoIv(this.serverAppIv, this.serverSeqNum++), additionalData = tlsBytes(CONTENT_TYPE_APPLICATION_DATA, 3, 3, uint16be(ciphertext.length)), plaintext = this.cipherConfig.chacha ? await chacha20Poly1305Decrypt(this.serverAppKey, nonce, ciphertext, additionalData) : await aesGcmDecryptWithKey(this.serverAppCryptoKey || (this.serverAppCryptoKey = await importAesGcmKey(this.serverAppKey, ["decrypt"])), nonce, ciphertext, additionalData);
    let innerTypeIndex = plaintext.length - 1;
    for (; innerTypeIndex >= 0 && !plaintext[innerTypeIndex]; ) innerTypeIndex--;
    if (innerTypeIndex < 0) return {
      data: EMPTY_BYTES,
      type: 0
    };
    return {
      data: plaintext.slice(0, innerTypeIndex),
      type: plaintext[innerTypeIndex]
    };
  }
  async write(data) {
    if (!this.handshakeComplete) throw new Error("Handshake not complete");
    const plaintext = \u6570\u636E\u8F6CUint8Array(data);
    if (!plaintext.byteLength) return;
    const writer = this.socket.writable.getWriter();
    try {
      const records = [];
      for (let offset = 0; offset < plaintext.byteLength; offset += TLS_MAX_PLAINTEXT_FRAGMENT) {
        const chunk = plaintext.subarray(offset, Math.min(offset + TLS_MAX_PLAINTEXT_FRAGMENT, plaintext.byteLength));
        const encrypted = this.isTls13 ? await this.encryptTls13(chunk) : await this.encryptTls12(chunk, CONTENT_TYPE_APPLICATION_DATA);
        records.push(buildTlsRecord(CONTENT_TYPE_APPLICATION_DATA, encrypted));
      }
      await writer.write(records.length === 1 ? records[0] : concatBytes(...records));
    } finally {
      writer.releaseLock();
    }
  }
  async read() {
    for (; ; ) {
      let record;
      for (; record = this.recordParser.next(); ) {
        if (record.type === CONTENT_TYPE_ALERT) {
          if (record.fragment[1] === ALERT_CLOSE_NOTIFY) return null;
          throw new Error(`TLS Alert: ${record.fragment[1]}`);
        }
        if (record.type !== CONTENT_TYPE_APPLICATION_DATA) continue;
        if (!this.isTls13) return this.decryptTls12(record.fragment, CONTENT_TYPE_APPLICATION_DATA);
        const { data, type } = await this.decryptTls13(record.fragment);
        if (type === CONTENT_TYPE_APPLICATION_DATA) return data;
        if (type === CONTENT_TYPE_ALERT) {
          if (data[1] === ALERT_CLOSE_NOTIFY) return null;
          throw new Error(`TLS Alert: ${data[1]}`);
        }
        if (type !== CONTENT_TYPE_HANDSHAKE) continue;
        let message;
        for (this.handshakeParser.feed(data); message = this.handshakeParser.next(); )
          if (message.type !== HANDSHAKE_TYPE_NEW_SESSION_TICKET && message.type === HANDSHAKE_TYPE_KEY_UPDATE) throw new Error("TLS 1.3 KeyUpdate is not supported by TLSClientMini");
      }
      const reader = this.socket.readable.getReader();
      try {
        const { value, done } = await this.readChunk(reader);
        if (done) return null;
        this.recordParser.feed(value);
      } finally {
        reader.releaseLock();
      }
    }
  }
  close() {
    this.socket.close();
  }
};
function stripIPv6Brackets(hostname = "") {
  const host = String(hostname || "").trim();
  return host.startsWith("[") && host.endsWith("]") ? host.slice(1, -1) : host;
}
__name(stripIPv6Brackets, "stripIPv6Brackets");
function isIPHostname(hostname = "") {
  const host = stripIPv6Brackets(hostname);
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
  if (ipv4Regex.test(host)) return true;
  if (!host.includes(":")) return false;
  try {
    new URL(`http://[${host}]/`);
    return true;
  } catch (e) {
    return false;
  }
}
__name(isIPHostname, "isIPHostname");
var CONNECT_TIMEOUT_MS = 9999;
var TURN_STUN_MAGIC_COOKIE = new Uint8Array([33, 18, 164, 66]);
var TURN_STUN_TYPE = {
  ALLOCATE_REQUEST: 3,
  ALLOCATE_SUCCESS: 259,
  ALLOCATE_ERROR: 275,
  CREATE_PERMISSION_REQUEST: 8,
  CREATE_PERMISSION_SUCCESS: 264,
  CONNECT_REQUEST: 10,
  CONNECT_SUCCESS: 266,
  CONNECTION_BIND_REQUEST: 11,
  CONNECTION_BIND_SUCCESS: 267
};
var TURN_STUN_ATTR = {
  USERNAME: 6,
  MESSAGE_INTEGRITY: 8,
  ERROR_CODE: 9,
  XOR_PEER_ADDRESS: 18,
  REALM: 20,
  NONCE: 21,
  REQUESTED_TRANSPORT: 25,
  CONNECTION_ID: 42
};
async function withTimeout(promise, timeoutMs, message) {
  let timer;
  try {
    return await Promise.race([
      promise,
      new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error(message)), timeoutMs);
      })
    ]);
  } finally {
    clearTimeout(timer);
  }
}
__name(withTimeout, "withTimeout");
function isIPv4(value) {
  const parts = String(value || "").split(".");
  return parts.length === 4 && parts.every((part) => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255);
}
__name(isIPv4, "isIPv4");
function turnStunPadding(length) {
  return -length & 3;
}
__name(turnStunPadding, "turnStunPadding");
function createTurnStunAttribute(type, value) {
  const body = \u6570\u636E\u8F6CUint8Array(value);
  const attribute = new Uint8Array(4 + body.byteLength + turnStunPadding(body.byteLength));
  const view = new DataView(attribute.buffer);
  view.setUint16(0, type);
  view.setUint16(2, body.byteLength);
  attribute.set(body, 4);
  return attribute;
}
__name(createTurnStunAttribute, "createTurnStunAttribute");
function createTurnStunMessage(type, transactionId, attributes) {
  const body = \u62FC\u63A5\u5B57\u8282\u6570\u636E(...attributes);
  const header = new Uint8Array(20);
  const view = new DataView(header.buffer);
  view.setUint16(0, type);
  view.setUint16(2, body.byteLength);
  header.set(TURN_STUN_MAGIC_COOKIE, 4);
  header.set(transactionId, 8);
  return \u62FC\u63A5\u5B57\u8282\u6570\u636E(header, body);
}
__name(createTurnStunMessage, "createTurnStunMessage");
function parseTurnErrorCode(data) {
  return data?.byteLength >= 4 ? (data[2] & 7) * 100 + data[3] : 0;
}
__name(parseTurnErrorCode, "parseTurnErrorCode");
function randomTurnTransactionId() {
  return crypto.getRandomValues(new Uint8Array(12));
}
__name(randomTurnTransactionId, "randomTurnTransactionId");
async function addTurnMessageIntegrity(message, key) {
  const signedMessage = new Uint8Array(message);
  const view = new DataView(signedMessage.buffer);
  view.setUint16(2, view.getUint16(2) + 24);
  const hmacKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-1" }, false, ["sign"]);
  const signature = await crypto.subtle.sign("HMAC", hmacKey, signedMessage);
  return \u62FC\u63A5\u5B57\u8282\u6570\u636E(signedMessage, createTurnStunAttribute(TURN_STUN_ATTR.MESSAGE_INTEGRITY, new Uint8Array(signature)));
}
__name(addTurnMessageIntegrity, "addTurnMessageIntegrity");
async function readTurnStunMessage(reader, bufferedData = null, timeoutMessage = "TURN response timed out") {
  let buffer = \u6709\u6548\u6570\u636E\u957F\u5EA6(bufferedData) ? \u6570\u636E\u8F6CUint8Array(bufferedData) : new Uint8Array(0);
  const pull = /* @__PURE__ */ __name(async () => {
    const { done, value } = await withTimeout(reader.read(), CONNECT_TIMEOUT_MS, timeoutMessage);
    if (done) throw new Error("TURN server closed connection");
    if (value?.byteLength) buffer = \u62FC\u63A5\u5B57\u8282\u6570\u636E(buffer, value);
  }, "pull");
  while (buffer.byteLength < 20) await pull();
  const messageLength = 20 + (buffer[2] << 8 | buffer[3]);
  if (messageLength > 65555) throw new Error("TURN response is too large");
  while (buffer.byteLength < messageLength) await pull();
  const messageBuffer = buffer.subarray(0, messageLength);
  if (TURN_STUN_MAGIC_COOKIE.some((value, index) => messageBuffer[4 + index] !== value)) throw new Error("Invalid TURN/STUN response");
  const view = new DataView(messageBuffer.buffer, messageBuffer.byteOffset, messageBuffer.byteLength);
  const attributes = {};
  for (let offset = 20; offset + 4 <= messageLength; ) {
    const type = view.getUint16(offset);
    const length = view.getUint16(offset + 2);
    if (offset + 4 + length > messageBuffer.byteLength) break;
    attributes[type] = messageBuffer.slice(offset + 4, offset + 4 + length);
    offset += 4 + length + turnStunPadding(length);
  }
  return {
    message: { type: view.getUint16(0), attributes },
    extraData: buffer.byteLength > messageLength ? buffer.subarray(messageLength) : null
  };
}
__name(readTurnStunMessage, "readTurnStunMessage");
async function writeTurnBytes(writer, bytes, timeoutMessage) {
  await withTimeout(writer.write(bytes), CONNECT_TIMEOUT_MS, timeoutMessage);
}
__name(writeTurnBytes, "writeTurnBytes");
async function turnConnect(proxy, targetHost, targetPort, TCP\u8FDE\u63A5) {
  proxy = { ...proxy, username: proxy.username ?? null, password: proxy.password ?? null };
  const resolvedTargetHost = stripIPv6Brackets(targetHost);
  let targetIp = isIPv4(resolvedTargetHost) ? resolvedTargetHost : null;
  if (!targetIp) {
    const records = await DoH\u67E5\u8BE2(resolvedTargetHost, "A");
    const recordData = records.find((item) => item.type === 1 && isIPv4(item.data))?.data;
    targetIp = typeof recordData === "string" ? recordData : null;
  }
  if (!targetIp) throw new Error(`Could not resolve ${targetHost} to an IPv4 address for TURN CONNECT`);
  const turnHost = stripIPv6Brackets(proxy.hostname);
  let controlSocket = null, dataSocket = null, controlWriter = null, controlReader = null, dataWriter = null, dataReader = null, dataReaderReleased = false;
  const close = /* @__PURE__ */ __name(() => {
    try {
      controlSocket?.close?.();
    } catch (e) {
    }
    try {
      dataSocket?.close?.();
    } catch (e) {
    }
  }, "close");
  const releaseDataReader = /* @__PURE__ */ __name(() => {
    if (dataReaderReleased) return;
    dataReaderReleased = true;
    try {
      dataReader?.releaseLock?.();
    } catch (e) {
    }
  }, "releaseDataReader");
  try {
    controlSocket = TCP\u8FDE\u63A5({ hostname: turnHost, port: proxy.port });
    await withTimeout(controlSocket.opened, CONNECT_TIMEOUT_MS, "TURN server connection timed out");
    controlWriter = controlSocket.writable.getWriter();
    controlReader = controlSocket.readable.getReader();
    const xorPeerAddress = new Uint8Array(8);
    xorPeerAddress[1] = 1;
    new DataView(xorPeerAddress.buffer).setUint16(2, targetPort ^ 8466);
    targetIp.split(".").forEach((value, index) => {
      xorPeerAddress[4 + index] = Number(value) ^ TURN_STUN_MAGIC_COOKIE[index];
    });
    const peerAddress = createTurnStunAttribute(TURN_STUN_ATTR.XOR_PEER_ADDRESS, xorPeerAddress);
    const requestedTransport = new Uint8Array([6, 0, 0, 0]);
    await writeTurnBytes(controlWriter, createTurnStunMessage(
      TURN_STUN_TYPE.ALLOCATE_REQUEST,
      randomTurnTransactionId(),
      [createTurnStunAttribute(TURN_STUN_ATTR.REQUESTED_TRANSPORT, requestedTransport)]
    ), "TURN Allocate request timed out");
    let turnResponse = await readTurnStunMessage(controlReader, null, "TURN Allocate response timed out");
    let message = turnResponse.message;
    let bufferedData = turnResponse.extraData;
    let integrityKey = null;
    let authAttributes = [];
    const sign = /* @__PURE__ */ __name((messageToSign) => integrityKey ? addTurnMessageIntegrity(messageToSign, integrityKey) : Promise.resolve(messageToSign), "sign");
    if (message.type === TURN_STUN_TYPE.ALLOCATE_ERROR && proxy.username !== null && proxy.password !== null && parseTurnErrorCode(message.attributes[TURN_STUN_ATTR.ERROR_CODE]) === 401) {
      const realmBytes = message.attributes[TURN_STUN_ATTR.REALM];
      const nonce = message.attributes[TURN_STUN_ATTR.NONCE];
      if (!realmBytes || !nonce?.byteLength) throw new Error("TURN authentication challenge is missing realm or nonce");
      const realm = textDecoder.decode(realmBytes);
      integrityKey = new Uint8Array(await crypto.subtle.digest("MD5", textEncoder.encode(`${proxy.username}:${realm}:${proxy.password}`)));
      authAttributes = [
        createTurnStunAttribute(TURN_STUN_ATTR.USERNAME, textEncoder.encode(proxy.username)),
        createTurnStunAttribute(TURN_STUN_ATTR.REALM, textEncoder.encode(realm)),
        createTurnStunAttribute(TURN_STUN_ATTR.NONCE, nonce)
      ];
      const allocateRequest = await addTurnMessageIntegrity(createTurnStunMessage(
        TURN_STUN_TYPE.ALLOCATE_REQUEST,
        randomTurnTransactionId(),
        [
          createTurnStunAttribute(TURN_STUN_ATTR.REQUESTED_TRANSPORT, requestedTransport),
          ...authAttributes
        ]
      ), integrityKey);
      const pipelinedMessages = await Promise.all([
        sign(createTurnStunMessage(TURN_STUN_TYPE.CREATE_PERMISSION_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes])),
        sign(createTurnStunMessage(TURN_STUN_TYPE.CONNECT_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes]))
      ]);
      await writeTurnBytes(controlWriter, \u62FC\u63A5\u5B57\u8282\u6570\u636E(allocateRequest, ...pipelinedMessages), "TURN authenticated Allocate request timed out");
      turnResponse = await readTurnStunMessage(controlReader, bufferedData, "TURN authenticated Allocate response timed out");
      message = turnResponse.message;
      bufferedData = turnResponse.extraData;
    } else if (message.type === TURN_STUN_TYPE.ALLOCATE_SUCCESS) {
      const pipelinedMessages = await Promise.all([
        sign(createTurnStunMessage(TURN_STUN_TYPE.CREATE_PERMISSION_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes])),
        sign(createTurnStunMessage(TURN_STUN_TYPE.CONNECT_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes]))
      ]);
      if (pipelinedMessages.length) await writeTurnBytes(controlWriter, \u62FC\u63A5\u5B57\u8282\u6570\u636E(...pipelinedMessages), "TURN pipelined request timed out");
    }
    if (message.type !== TURN_STUN_TYPE.ALLOCATE_SUCCESS) {
      const errorCode = parseTurnErrorCode(message.attributes[TURN_STUN_ATTR.ERROR_CODE]);
      throw new Error(errorCode ? `TURN Allocate failed with ${errorCode}` : "TURN Allocate failed");
    }
    dataSocket = TCP\u8FDE\u63A5({ hostname: turnHost, port: proxy.port });
    turnResponse = await readTurnStunMessage(controlReader, bufferedData, "TURN CreatePermission response timed out");
    message = turnResponse.message;
    bufferedData = turnResponse.extraData;
    if (message.type !== TURN_STUN_TYPE.CREATE_PERMISSION_SUCCESS) throw new Error("TURN CreatePermission failed");
    turnResponse = await readTurnStunMessage(controlReader, bufferedData, "TURN CONNECT response timed out");
    message = turnResponse.message;
    bufferedData = turnResponse.extraData;
    if (message.type !== TURN_STUN_TYPE.CONNECT_SUCCESS || !message.attributes[TURN_STUN_ATTR.CONNECTION_ID]) throw new Error("TURN CONNECT failed");
    await withTimeout(dataSocket.opened, CONNECT_TIMEOUT_MS, "TURN data connection timed out");
    dataWriter = dataSocket.writable.getWriter();
    dataReader = dataSocket.readable.getReader();
    await writeTurnBytes(dataWriter, await sign(createTurnStunMessage(
      TURN_STUN_TYPE.CONNECTION_BIND_REQUEST,
      randomTurnTransactionId(),
      [
        createTurnStunAttribute(TURN_STUN_ATTR.CONNECTION_ID, message.attributes[TURN_STUN_ATTR.CONNECTION_ID]),
        ...authAttributes
      ]
    )), "TURN ConnectionBind request timed out");
    turnResponse = await readTurnStunMessage(dataReader, null, "TURN ConnectionBind response timed out");
    message = turnResponse.message;
    const extraPayload = turnResponse.extraData;
    if (message.type !== TURN_STUN_TYPE.CONNECTION_BIND_SUCCESS) throw new Error("TURN ConnectionBind failed");
    controlWriter.releaseLock();
    controlWriter = null;
    controlReader.releaseLock();
    controlReader = null;
    dataWriter.releaseLock();
    dataWriter = null;
    const readable = new ReadableStream({
      start(controller) {
        if (extraPayload?.byteLength) controller.enqueue(extraPayload);
      },
      pull(controller) {
        return dataReader.read().then(({ done, value }) => {
          if (done) {
            releaseDataReader();
            controller.close();
          } else if (value?.byteLength) controller.enqueue(new Uint8Array(value));
        });
      },
      cancel() {
        try {
          dataReader?.cancel?.();
        } catch (e) {
        }
        releaseDataReader();
        close();
      }
    });
    return { readable, writable: dataSocket.writable, closed: dataSocket.closed, close };
  } catch (error) {
    try {
      controlWriter?.releaseLock?.();
    } catch (e) {
    }
    try {
      controlReader?.releaseLock?.();
    } catch (e) {
    }
    try {
      dataWriter?.releaseLock?.();
    } catch (e) {
    }
    releaseDataReader();
    close();
    throw error;
  }
}
__name(turnConnect, "turnConnect");
var SSTP_TCP_MSS = 1400;
var SSTP_EMPTY_BYTES = new Uint8Array(0);
function readSstpUint16(bytes, offset = 0) {
  return bytes[offset] << 8 | bytes[offset + 1];
}
__name(readSstpUint16, "readSstpUint16");
function readSstpUint32(bytes, offset = 0) {
  return (bytes[offset] << 24 | bytes[offset + 1] << 16 | bytes[offset + 2] << 8 | bytes[offset + 3]) >>> 0;
}
__name(readSstpUint32, "readSstpUint32");
function randomSstpUint16() {
  return readSstpUint16(crypto.getRandomValues(new Uint8Array(2)));
}
__name(randomSstpUint16, "randomSstpUint16");
function internetChecksum(bytes, offset, length) {
  let sum = 0;
  for (let index = offset; index < offset + length - 1; index += 2) sum += readSstpUint16(bytes, index);
  if (length & 1) sum += bytes[offset + length - 1] << 8;
  while (sum >> 16) sum = (sum & 65535) + (sum >> 16);
  return ~sum & 65535;
}
__name(internetChecksum, "internetChecksum");
async function sstpConnect(proxy, targetHost, targetPort, TCP\u8FDE\u63A5) {
  proxy = { ...proxy, username: proxy.username ?? null, password: proxy.password ?? null };
  let bufferedBytes = SSTP_EMPTY_BYTES, pppIdentifier = 1, socket = null, reader = null, writer = null;
  let closedSettled = false, resolveClosed, rejectClosed;
  const closed = new Promise((resolve, reject) => {
    resolveClosed = resolve;
    rejectClosed = reject;
  });
  const settleClosed = /* @__PURE__ */ __name((settle, value) => {
    if (closedSettled) return;
    closedSettled = true;
    settle(value);
  }, "settleClosed");
  const close = /* @__PURE__ */ __name(() => {
    try {
      reader?.cancel?.().catch?.(() => {
      });
    } catch (e) {
    }
    try {
      reader?.releaseLock?.();
    } catch (e) {
    }
    try {
      writer?.close?.().catch?.(() => {
      });
    } catch (e) {
    }
    try {
      writer?.releaseLock?.();
    } catch (e) {
    }
    try {
      socket?.close?.();
    } catch (e) {
    }
    settleClosed(resolveClosed);
  }, "close");
  const readSocketChunk = /* @__PURE__ */ __name(async () => {
    const { value, done } = await reader.read();
    if (done || !value) throw new Error("SSTP socket closed");
    return \u6570\u636E\u8F6CUint8Array(value);
  }, "readSocketChunk");
  const readBytes = /* @__PURE__ */ __name(async (length) => {
    while (bufferedBytes.byteLength < length) {
      const chunk = await readSocketChunk();
      bufferedBytes = bufferedBytes.byteLength ? \u62FC\u63A5\u5B57\u8282\u6570\u636E(bufferedBytes, chunk) : chunk;
    }
    const result = bufferedBytes.subarray(0, length);
    bufferedBytes = bufferedBytes.subarray(length);
    return result;
  }, "readBytes");
  const readHttpLine = /* @__PURE__ */ __name(async () => {
    for (; ; ) {
      const lineEnd = bufferedBytes.indexOf(10);
      if (lineEnd >= 0) {
        const line = textDecoder.decode(bufferedBytes.subarray(0, lineEnd));
        bufferedBytes = bufferedBytes.subarray(lineEnd + 1);
        return line.replace(/\r$/, "");
      }
      const chunk = await readSocketChunk();
      bufferedBytes = bufferedBytes.byteLength ? \u62FC\u63A5\u5B57\u8282\u6570\u636E(bufferedBytes, chunk) : chunk;
    }
  }, "readHttpLine");
  const readPacket = /* @__PURE__ */ __name(async (timeoutMs = CONNECT_TIMEOUT_MS) => {
    const header = await withTimeout(readBytes(4), timeoutMs, "SSTP read timeout");
    const length = readSstpUint16(header, 2) & 4095;
    if (length < 4) throw new Error("Invalid SSTP packet length");
    return {
      isControl: (header[1] & 1) !== 0,
      body: length > 4 ? await withTimeout(readBytes(length - 4), timeoutMs, "SSTP packet body read timeout") : SSTP_EMPTY_BYTES
    };
  }, "readPacket");
  const buildSstpDataPacket = /* @__PURE__ */ __name((pppFrame) => {
    const packetLength = 6 + pppFrame.byteLength;
    const packet = new Uint8Array(packetLength);
    packet.set([16, 0, packetLength >> 8 & 15 | 128, packetLength & 255, 255, 3]);
    packet.set(pppFrame, 6);
    return packet;
  }, "buildSstpDataPacket");
  const buildPppConfigurePacket = /* @__PURE__ */ __name((protocol, code, id, options = []) => {
    const optionsLength = options.reduce((size, option) => size + 2 + option.data.byteLength, 0);
    const frame = new Uint8Array(6 + optionsLength);
    const view = new DataView(frame.buffer);
    view.setUint16(0, protocol);
    frame[2] = code;
    frame[3] = id;
    view.setUint16(4, 4 + optionsLength);
    options.reduce((offset, option) => {
      frame[offset] = option.type;
      frame[offset + 1] = 2 + option.data.byteLength;
      frame.set(option.data, offset + 2);
      return offset + 2 + option.data.byteLength;
    }, 6);
    return frame;
  }, "buildPppConfigurePacket");
  const parsePPPFrame = /* @__PURE__ */ __name((data) => {
    const offset = data.byteLength >= 2 && data[0] === 255 && data[1] === 3 ? 2 : 0;
    if (data.byteLength - offset < 4) return null;
    const protocol = readSstpUint16(data, offset);
    if (protocol === 33) return { protocol, ipPacket: data.subarray(offset + 2) };
    if (data.byteLength - offset < 6) return null;
    return { protocol, code: data[offset + 2], id: data[offset + 3], payload: data.subarray(offset + 6), rawPacket: data.subarray(offset) };
  }, "parsePPPFrame");
  const parsePppOptions = /* @__PURE__ */ __name((data) => {
    const options = [];
    for (let offset = 0; offset + 2 <= data.byteLength; ) {
      const type = data[offset];
      const length = data[offset + 1];
      if (length < 2 || offset + length > data.byteLength) break;
      options.push({ type, data: data.subarray(offset + 2, offset + length) });
      offset += length;
    }
    return options;
  }, "parsePppOptions");
  try {
    const serverHost = stripIPv6Brackets(proxy.hostname);
    const serverPort = proxy.port;
    socket = TCP\u8FDE\u63A5({ hostname: serverHost, port: serverPort }, { secureTransport: "on", allowHalfOpen: false });
    await withTimeout(socket.opened, CONNECT_TIMEOUT_MS, "SSTP server connection timed out");
    reader = socket.readable.getReader();
    writer = socket.writable.getWriter();
    const displayHost = serverHost.includes(":") ? `[${serverHost}]` : serverHost;
    const httpRequest = textEncoder.encode(
      `SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1\r
Host: ${Number(serverPort) === 443 ? displayHost : `${displayHost}:${serverPort}`}\r
Content-Length: 18446744073709551615\r
SSTPCORRELATIONID: {${crypto.randomUUID()}}\r
\r
`
    );
    const encapsulatedProtocol = new Uint8Array(2);
    new DataView(encapsulatedProtocol.buffer).setUint16(0, 1);
    const maximumReceiveUnit = new Uint8Array(2);
    new DataView(maximumReceiveUnit.buffer).setUint16(0, 1500);
    const sstpConnectRequest = new Uint8Array(12 + encapsulatedProtocol.byteLength);
    const sstpConnectView = new DataView(sstpConnectRequest.buffer);
    sstpConnectRequest[0] = 16;
    sstpConnectRequest[1] = 1;
    sstpConnectView.setUint16(2, sstpConnectRequest.byteLength | 32768);
    sstpConnectView.setUint16(4, 1);
    sstpConnectView.setUint16(6, 1);
    sstpConnectRequest[9] = 1;
    sstpConnectView.setUint16(10, 4 + encapsulatedProtocol.byteLength);
    sstpConnectRequest.set(encapsulatedProtocol, 12);
    await withTimeout(writer.write(\u62FC\u63A5\u5B57\u8282\u6570\u636E(
      httpRequest,
      sstpConnectRequest,
      buildSstpDataPacket(buildPppConfigurePacket(49185, 1, pppIdentifier++, [
        { type: 1, data: maximumReceiveUnit }
      ]))
    )), CONNECT_TIMEOUT_MS, "SSTP HTTP handshake request timed out");
    const statusLine = await withTimeout(readHttpLine(), CONNECT_TIMEOUT_MS, "SSTP HTTP handshake timed out");
    for (; ; ) {
      const line = await withTimeout(readHttpLine(), CONNECT_TIMEOUT_MS, "SSTP HTTP header read timed out");
      if (line === "") break;
    }
    if (!/HTTP\/\d(?:\.\d)?\s+2\d\d/i.test(statusLine)) throw new Error(`SSTP HTTP handshake failed: ${statusLine || "invalid status"}`);
    let localLcpAcked = false, peerLcpAcked = false, papRequired = false, papSent = false, papDone = false, ipcpStarted = false, ipcpFinished = false, sourceIp = null;
    const sendPapIfReady = /* @__PURE__ */ __name(async () => {
      if (!localLcpAcked || !peerLcpAcked || !papRequired || papSent) return;
      if (proxy.username === null || proxy.password === null) throw new Error("SSTP server requires PAP authentication");
      const username = textEncoder.encode(proxy.username);
      const password = textEncoder.encode(proxy.password);
      if (username.byteLength > 255 || password.byteLength > 255) throw new Error("SSTP username/password is too long");
      const papLength = 6 + username.byteLength + password.byteLength;
      const frame = new Uint8Array(2 + papLength);
      const view = new DataView(frame.buffer);
      view.setUint16(0, 49187);
      frame[2] = 1;
      frame[3] = pppIdentifier++;
      view.setUint16(4, papLength);
      frame[6] = username.byteLength;
      frame.set(username, 7);
      frame[7 + username.byteLength] = password.byteLength;
      frame.set(password, 8 + username.byteLength);
      await withTimeout(writer.write(buildSstpDataPacket(frame)), CONNECT_TIMEOUT_MS, "SSTP PAP authentication request timed out");
      papSent = true;
    }, "sendPapIfReady");
    const startIpcpIfReady = /* @__PURE__ */ __name(async () => {
      if (!localLcpAcked || !peerLcpAcked || ipcpStarted || papRequired && !papDone) return;
      await withTimeout(writer.write(buildSstpDataPacket(buildPppConfigurePacket(32801, 1, pppIdentifier++, [
        { type: 3, data: new Uint8Array(4) }
      ]))), CONNECT_TIMEOUT_MS, "SSTP IPCP request timed out");
      ipcpStarted = true;
    }, "startIpcpIfReady");
    for (let round = 0; round < 50 && !ipcpFinished; round++) {
      const packet = await readPacket(CONNECT_TIMEOUT_MS);
      if (packet.isControl) continue;
      const ppp = parsePPPFrame(packet.body);
      if (!ppp) continue;
      if (ppp.protocol === 49185) {
        if (ppp.code === 1) {
          const authOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (authOption?.data?.byteLength >= 2) {
            const authProtocol = readSstpUint16(authOption.data);
            if (authProtocol !== 49187) throw new Error(`SSTP unsupported PPP authentication protocol: 0x${authProtocol.toString(16)}`);
            papRequired = true;
          }
          const ack = new Uint8Array(ppp.rawPacket);
          ack[2] = 2;
          await withTimeout(writer.write(buildSstpDataPacket(ack)), CONNECT_TIMEOUT_MS, "SSTP LCP Configure-Ack timed out");
          peerLcpAcked = true;
          await sendPapIfReady();
          await startIpcpIfReady();
        } else if (ppp.code === 2) {
          localLcpAcked = true;
          await sendPapIfReady();
          await startIpcpIfReady();
        }
        continue;
      }
      if (ppp.protocol === 49187) {
        if (ppp.code === 2) {
          papDone = true;
          await startIpcpIfReady();
        } else if (ppp.code === 3) throw new Error("SSTP PAP authentication failed");
        continue;
      }
      if (ppp.protocol === 32801) {
        if (ppp.code === 1) {
          const ack = new Uint8Array(ppp.rawPacket);
          ack[2] = 2;
          await withTimeout(writer.write(buildSstpDataPacket(ack)), CONNECT_TIMEOUT_MS, "SSTP IPCP Configure-Ack timed out");
          await startIpcpIfReady();
        } else if (ppp.code === 3) {
          const addressOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (addressOption?.data?.byteLength === 4) {
            sourceIp = [...addressOption.data].join(".");
            await withTimeout(writer.write(buildSstpDataPacket(buildPppConfigurePacket(32801, 1, pppIdentifier++, [
              { type: 3, data: addressOption.data }
            ]))), CONNECT_TIMEOUT_MS, "SSTP IPCP address request timed out");
            ipcpStarted = true;
          }
        } else if (ppp.code === 2) {
          const addressOption = parsePppOptions(ppp.payload).find((option) => option.type === 3);
          if (addressOption?.data?.byteLength === 4) sourceIp = [...addressOption.data].join(".");
          ipcpFinished = true;
        }
      }
    }
    if (!sourceIp) throw new Error("SSTP did not assign an IPv4 address");
    const target = stripIPv6Brackets(targetHost);
    let targetIp = isIPv4(target) ? target : null;
    if (!targetIp) {
      const records = await DoH\u67E5\u8BE2(target, "A");
      const recordData = records.find((item) => item.type === 1 && isIPv4(item.data))?.data;
      targetIp = typeof recordData === "string" ? recordData : null;
    }
    if (!targetIp) throw new Error(`Could not resolve ${targetHost} to an IPv4 address for SSTP`);
    const sourcePort = 1e4 + randomSstpUint16() % 5e4;
    const sourceAddress = new Uint8Array(String(sourceIp || "").split(".").map(Number));
    const destinationAddress = new Uint8Array(String(targetIp || "").split(".").map(Number));
    let sequenceNumber = readSstpUint32(crypto.getRandomValues(new Uint8Array(4)));
    let acknowledgementNumber = 0;
    const ipHeaderTemplate = new Uint8Array(20);
    ipHeaderTemplate.set([69, 0, 0, 0, 0, 0, 64, 0, 64, 6]);
    ipHeaderTemplate.set(sourceAddress, 12);
    ipHeaderTemplate.set(destinationAddress, 16);
    const tcpPseudoHeader = new Uint8Array(1432);
    tcpPseudoHeader.set(sourceAddress);
    tcpPseudoHeader.set(destinationAddress, 4);
    tcpPseudoHeader[9] = 6;
    const buildTcpFrame = /* @__PURE__ */ __name((flags, payload = SSTP_EMPTY_BYTES) => {
      const bytes = \u6570\u636E\u8F6CUint8Array(payload);
      const payloadLength = bytes.byteLength;
      const tcpLength = 20 + payloadLength;
      const ipLength = 20 + tcpLength;
      const sstpLength = 8 + ipLength;
      const frame = new Uint8Array(sstpLength);
      const view = new DataView(frame.buffer);
      frame.set([16, 0, sstpLength >> 8 & 15 | 128, sstpLength & 255, 255, 3, 0, 33]);
      frame.set(ipHeaderTemplate, 8);
      view.setUint16(10, ipLength);
      view.setUint16(12, randomSstpUint16());
      view.setUint16(18, internetChecksum(frame, 8, 20));
      view.setUint16(28, sourcePort);
      view.setUint16(30, targetPort);
      view.setUint32(32, sequenceNumber);
      view.setUint32(36, acknowledgementNumber);
      frame[40] = 80;
      frame[41] = flags;
      view.setUint16(42, 65535);
      if (payloadLength) frame.set(bytes, 48);
      tcpPseudoHeader[10] = tcpLength >> 8;
      tcpPseudoHeader[11] = tcpLength & 255;
      tcpPseudoHeader.set(frame.subarray(28, 28 + tcpLength), 12);
      view.setUint16(44, internetChecksum(tcpPseudoHeader, 0, 12 + tcpLength));
      return frame;
    }, "buildTcpFrame");
    const matchIncomingIpPacket = /* @__PURE__ */ __name((ipPacket) => {
      if (ipPacket.byteLength < 40 || ipPacket[9] !== 6) return null;
      const ipHeaderLength = (ipPacket[0] & 15) * 4;
      if (ipPacket.byteLength < ipHeaderLength + 20) return null;
      if (readSstpUint16(ipPacket, ipHeaderLength) !== targetPort) return null;
      if (readSstpUint16(ipPacket, ipHeaderLength + 2) !== sourcePort) return null;
      return {
        flags: ipPacket[ipHeaderLength + 13],
        sequence: readSstpUint32(ipPacket, ipHeaderLength + 4),
        payloadOffset: ipHeaderLength + (ipPacket[ipHeaderLength + 12] >> 4 & 15) * 4
      };
    }, "matchIncomingIpPacket");
    await withTimeout(writer.write(buildTcpFrame(2)), CONNECT_TIMEOUT_MS, "SSTP TCP SYN write timed out");
    sequenceNumber = sequenceNumber + 1 >>> 0;
    let tcpReady = false;
    for (let attempt = 0; attempt < 30; attempt++) {
      const packet = await readPacket(CONNECT_TIMEOUT_MS);
      if (packet.isControl) continue;
      const ppp = parsePPPFrame(packet.body);
      if (!ppp || ppp.protocol !== 33) continue;
      const tcp = matchIncomingIpPacket(ppp.ipPacket);
      if (!tcp || (tcp.flags & 18) !== 18) continue;
      acknowledgementNumber = tcp.sequence + 1 >>> 0;
      await withTimeout(writer.write(buildTcpFrame(16)), CONNECT_TIMEOUT_MS, "SSTP TCP ACK write timed out");
      tcpReady = true;
      break;
    }
    if (!tcpReady) throw new Error("TCP handshake through SSTP timed out");
    let streamController = null;
    const readable = new ReadableStream({
      start(controller) {
        streamController = controller;
      },
      cancel() {
        close();
      }
    });
    (async () => {
      try {
        let pendingChunks = [], pendingLength = 0;
        const flush = /* @__PURE__ */ __name(() => {
          if (!pendingLength) return;
          if (!streamController) throw new Error("SSTP readable stream is not ready");
          streamController.enqueue(pendingChunks.length === 1 ? pendingChunks[0] : \u62FC\u63A5\u5B57\u8282\u6570\u636E(...pendingChunks));
          pendingChunks = [];
          pendingLength = 0;
          writer.write(buildTcpFrame(16)).catch(() => {
          });
        }, "flush");
        for (; ; ) {
          const packet = await readPacket(6e4);
          if (packet.isControl) continue;
          const ppp = parsePPPFrame(packet.body);
          if (!ppp || ppp.protocol !== 33) continue;
          const incoming = matchIncomingIpPacket(ppp.ipPacket);
          if (!incoming) continue;
          if (incoming.payloadOffset < ppp.ipPacket.byteLength) {
            const payload = ppp.ipPacket.subarray(incoming.payloadOffset);
            if (payload.byteLength) {
              acknowledgementNumber = incoming.sequence + payload.byteLength >>> 0;
              pendingChunks.push(new Uint8Array(payload));
              pendingLength += payload.byteLength;
            }
          }
          if (incoming.flags & 1) {
            flush();
            acknowledgementNumber = acknowledgementNumber + 1 >>> 0;
            writer.write(buildTcpFrame(17)).catch(() => {
            });
            const controller = streamController;
            if (controller) {
              try {
                controller.close();
              } catch (e) {
              }
            }
            close();
            return;
          }
          if (bufferedBytes.byteLength < 4 || pendingLength >= 32768) flush();
        }
      } catch (error) {
        const controller = streamController;
        if (controller) {
          try {
            controller.error(error);
          } catch (e) {
          }
        }
        settleClosed(rejectClosed, error);
        try {
          socket?.close?.();
        } catch (e) {
        }
      }
    })();
    const writable = new WritableStream({
      async write(chunk) {
        const bytes = \u6570\u636E\u8F6CUint8Array(chunk);
        if (!bytes.byteLength) return;
        if (bytes.byteLength <= SSTP_TCP_MSS) {
          await writer.write(buildTcpFrame(24, bytes));
          sequenceNumber = sequenceNumber + bytes.byteLength >>> 0;
          return;
        }
        const frames = [];
        for (let offset = 0; offset < bytes.byteLength; offset += SSTP_TCP_MSS) {
          const segment = bytes.subarray(offset, Math.min(offset + SSTP_TCP_MSS, bytes.byteLength));
          frames.push(buildTcpFrame(24, segment));
          sequenceNumber = sequenceNumber + segment.byteLength >>> 0;
        }
        await writer.write(\u62FC\u63A5\u5B57\u8282\u6570\u636E(...frames));
      },
      close() {
        return writer.write(buildTcpFrame(17)).catch(() => {
        });
      },
      abort(error) {
        close();
        if (error) settleClosed(rejectClosed, error);
      }
    });
    return { readable, writable, closed, close };
  } catch (error) {
    close();
    throw error;
  }
}
__name(sstpConnect, "sstpConnect");
function base64SecretEncode(plaintext, secret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plaintext);
  const key = encoder.encode(secret);
  const mixed = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    mixed[i] = data[i] ^ key[i % key.length];
  }
  let binary = "";
  for (let i = 0; i < mixed.length; i++) {
    binary += String.fromCharCode(mixed[i]);
  }
  return btoa(binary);
}
__name(base64SecretEncode, "base64SecretEncode");
function base64SecretDecode(encoded, secret) {
  const binary = atob(encoded);
  const mixed = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    mixed[i] = binary.charCodeAt(i);
  }
  const encoder = new TextEncoder();
  const key = encoder.encode(secret);
  const data = new Uint8Array(mixed.length);
  for (let i = 0; i < mixed.length; i++) {
    data[i] = mixed[i] ^ key[i % key.length];
  }
  const decoder = new TextDecoder();
  return decoder.decode(data);
}
__name(base64SecretDecode, "base64SecretDecode");
function \u83B7\u53D6\u4F20\u8F93\u534F\u8BAE\u914D\u7F6E(\u914D\u7F6E = {}) {
  const \u662FgRPC = \u914D\u7F6E.\u4F20\u8F93\u534F\u8BAE === "grpc";
  return {
    type: \u662FgRPC ? \u914D\u7F6E.gRPC\u6A21\u5F0F === "multi" ? "grpc&mode=multi" : "grpc&mode=gun" : \u914D\u7F6E.\u4F20\u8F93\u534F\u8BAE === "xhttp" ? "xhttp&mode=stream-one" : "ws",
    \u8DEF\u5F84\u5B57\u6BB5\u540D: \u662FgRPC ? "serviceName" : "path",
    \u57DF\u540D\u5B57\u6BB5\u540D: \u662FgRPC ? "authority" : "host"
  };
}
__name(\u83B7\u53D6\u4F20\u8F93\u534F\u8BAE\u914D\u7F6E, "\u83B7\u53D6\u4F20\u8F93\u534F\u8BAE\u914D\u7F6E");
function \u83B7\u53D6\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C(\u914D\u7F6E = {}, \u8282\u70B9\u8DEF\u5F84 = "/", \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668 = false) {
  const \u8DEF\u5F84\u503C = \u4F5C\u4E3A\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668 ? "/" : \u914D\u7F6E.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(\u8282\u70B9\u8DEF\u5F84) : \u8282\u70B9\u8DEF\u5F84;
  if (\u914D\u7F6E.\u4F20\u8F93\u534F\u8BAE !== "grpc") return \u8DEF\u5F84\u503C;
  return \u8DEF\u5F84\u503C.split("?")[0] || "/";
}
__name(\u83B7\u53D6\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C, "\u83B7\u53D6\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C");
function log(...args) {
  if (\u8C03\u8BD5\u65E5\u5FD7\u6253\u5370) console.log(...args);
}
__name(log, "log");
function Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(Clash_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9, config_JSON2 = {}) {
  const uuid = config_JSON2?.UUID || null;
  const ECH\u542F\u7528 = Boolean(config_JSON2?.ECH);
  const HOSTS = Array.isArray(config_JSON2?.HOSTS) ? [...config_JSON2.HOSTS] : [];
  const ECH_SNI = config_JSON2?.ECHConfig?.SNI || null;
  const ECH_DNS = config_JSON2?.ECHConfig?.DNS;
  const \u9700\u8981\u5904\u7406ECH = Boolean(uuid && ECH\u542F\u7528);
  const gRPCUserAgent = typeof config_JSON2?.gRPCUserAgent === "string" && config_JSON2.gRPCUserAgent.trim() ? config_JSON2.gRPCUserAgent.trim() : null;
  const \u9700\u8981\u5904\u7406gRPC = config_JSON2?.\u4F20\u8F93\u534F\u8BAE === "grpc" && Boolean(gRPCUserAgent);
  const gRPCUserAgentYAML = gRPCUserAgent ? JSON.stringify(gRPCUserAgent) : null;
  let clash_yaml = Clash_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9.replace(/mode:\s*Rule\b/g, "mode: rule");
  const baseDnsBlock = `dns:
  enable: true
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  use-hosts: true
  nameserver:
    - https://sm2.doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  fallback:
    - 8.8.4.4
    - 208.67.220.220
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 127.0.0.1/32
      - 0.0.0.0/32
    domain:
      - '+.google.com'
      - '+.facebook.com'
      - '+.youtube.com'
`;
  const \u6DFB\u52A0InlineGrpcUserAgent = /* @__PURE__ */ __name((text) => text.replace(/grpc-opts:\s*\{([\s\S]*?)\}/i, (all, inner) => {
    if (/grpc-user-agent\s*:/i.test(inner)) return all;
    let content = inner.trim();
    if (content.endsWith(",")) content = content.slice(0, -1).trim();
    const patchedContent = content ? `${content}, grpc-user-agent: ${gRPCUserAgentYAML}` : `grpc-user-agent: ${gRPCUserAgentYAML}`;
    return `grpc-opts: {${patchedContent}}`;
  }), "\u6DFB\u52A0InlineGrpcUserAgent");
  const \u5339\u914D\u5230gRPC\u7F51\u7EDC = /* @__PURE__ */ __name((text) => /(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/mi.test(text), "\u5339\u914D\u5230gRPC\u7F51\u7EDC");
  const \u83B7\u53D6\u4EE3\u7406\u7C7B\u578B = /* @__PURE__ */ __name((nodeText) => nodeText.match(/type:\s*(\w+)/)?.[1] || "vless", "\u83B7\u53D6\u4EE3\u7406\u7C7B\u578B");
  const \u83B7\u53D6\u51ED\u636E\u503C = /* @__PURE__ */ __name((nodeText, isFlowStyle) => {
    const credentialField = \u83B7\u53D6\u4EE3\u7406\u7C7B\u578B(nodeText) === "trojan" ? "password" : "uuid";
    const pattern = new RegExp(`${credentialField}:\\s*${isFlowStyle ? "([^,}\\n]+)" : "([^\\n]+)"}`);
    return nodeText.match(pattern)?.[1]?.trim() || null;
  }, "\u83B7\u53D6\u51ED\u636E\u503C");
  const \u63D2\u5165NameserverPolicy = /* @__PURE__ */ __name((yaml, hostsEntries) => {
    if (/^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(yaml)) {
      return yaml.replace(/^(\s{2}nameserver-policy:\s*\n)/m, `$1${hostsEntries}
`);
    }
    const lines2 = yaml.split("\n");
    let dnsBlockEndIndex = -1;
    let inDnsBlock = false;
    for (let i2 = 0; i2 < lines2.length; i2++) {
      const line = lines2[i2];
      if (/^dns:\s*$/.test(line)) {
        inDnsBlock = true;
        continue;
      }
      if (inDnsBlock && /^[a-zA-Z]/.test(line)) {
        dnsBlockEndIndex = i2;
        break;
      }
    }
    const nameserverPolicyBlock = `  nameserver-policy:
${hostsEntries}`;
    if (dnsBlockEndIndex !== -1) lines2.splice(dnsBlockEndIndex, 0, nameserverPolicyBlock);
    else lines2.push(nameserverPolicyBlock);
    return lines2.join("\n");
  }, "\u63D2\u5165NameserverPolicy");
  const \u6DFB\u52A0Flow\u683C\u5F0FgRPCUserAgent = /* @__PURE__ */ __name((nodeText) => {
    if (!\u5339\u914D\u5230gRPC\u7F51\u7EDC(nodeText) || /grpc-user-agent\s*:/i.test(nodeText)) return nodeText;
    if (/grpc-opts:\s*\{/i.test(nodeText)) return \u6DFB\u52A0InlineGrpcUserAgent(nodeText);
    return nodeText.replace(/\}(\s*)$/, `, grpc-opts: {grpc-user-agent: ${gRPCUserAgentYAML}}}$1`);
  }, "\u6DFB\u52A0Flow\u683C\u5F0FgRPCUserAgent");
  const \u6DFB\u52A0Block\u683C\u5F0FgRPCUserAgent = /* @__PURE__ */ __name((nodeLines, topLevelIndent) => {
    const \u9876\u7EA7\u7F29\u8FDB = " ".repeat(topLevelIndent);
    let grpcOptsIndex = -1;
    for (let idx = 0; idx < nodeLines.length; idx++) {
      const line = nodeLines[idx];
      if (!line.trim()) continue;
      const indent = line.search(/\S/);
      if (indent !== topLevelIndent) continue;
      if (/^\s*grpc-opts:\s*(?:#.*)?$/.test(line) || /^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(line)) {
        grpcOptsIndex = idx;
        break;
      }
    }
    if (grpcOptsIndex === -1) {
      let insertIndex = -1;
      for (let j = nodeLines.length - 1; j >= 0; j--) {
        if (nodeLines[j].trim()) {
          insertIndex = j;
          break;
        }
      }
      if (insertIndex >= 0) nodeLines.splice(insertIndex + 1, 0, `${\u9876\u7EA7\u7F29\u8FDB}grpc-opts:`, `${\u9876\u7EA7\u7F29\u8FDB}  grpc-user-agent: ${gRPCUserAgentYAML}`);
      return nodeLines;
    }
    const grpcLine = nodeLines[grpcOptsIndex];
    if (/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(grpcLine)) {
      if (!/grpc-user-agent\s*:/i.test(grpcLine)) nodeLines[grpcOptsIndex] = \u6DFB\u52A0InlineGrpcUserAgent(grpcLine);
      return nodeLines;
    }
    let blockEndIndex = nodeLines.length;
    let \u5B50\u7EA7\u7F29\u8FDB = topLevelIndent + 2;
    let \u5DF2\u6709gRPCUserAgent = false;
    for (let idx = grpcOptsIndex + 1; idx < nodeLines.length; idx++) {
      const line = nodeLines[idx];
      const trimmed = line.trim();
      if (!trimmed) continue;
      const indent = line.search(/\S/);
      if (indent <= topLevelIndent) {
        blockEndIndex = idx;
        break;
      }
      if (indent > topLevelIndent && \u5B50\u7EA7\u7F29\u8FDB === topLevelIndent + 2) \u5B50\u7EA7\u7F29\u8FDB = indent;
      if (/^grpc-user-agent\s*:/.test(trimmed)) {
        \u5DF2\u6709gRPCUserAgent = true;
        break;
      }
    }
    if (!\u5DF2\u6709gRPCUserAgent) nodeLines.splice(blockEndIndex, 0, `${" ".repeat(\u5B50\u7EA7\u7F29\u8FDB)}grpc-user-agent: ${gRPCUserAgentYAML}`);
    return nodeLines;
  }, "\u6DFB\u52A0Block\u683C\u5F0FgRPCUserAgent");
  const \u6DFB\u52A0Block\u683C\u5F0FECHOpts = /* @__PURE__ */ __name((nodeLines, topLevelIndent) => {
    let insertIndex = -1;
    for (let j = nodeLines.length - 1; j >= 0; j--) {
      if (nodeLines[j].trim()) {
        insertIndex = j;
        break;
      }
    }
    if (insertIndex < 0) return nodeLines;
    const indent = " ".repeat(topLevelIndent);
    const echOptsLines = [`${indent}ech-opts:`, `${indent}  enable: true`];
    if (ECH_SNI) echOptsLines.push(`${indent}  query-server-name: ${ECH_SNI}`);
    nodeLines.splice(insertIndex + 1, 0, ...echOptsLines);
    return nodeLines;
  }, "\u6DFB\u52A0Block\u683C\u5F0FECHOpts");
  if (!/^dns:\s*(?:\n|$)/m.test(clash_yaml)) clash_yaml = baseDnsBlock + clash_yaml;
  if (ECH_SNI && !HOSTS.includes(ECH_SNI)) HOSTS.push(ECH_SNI);
  if (ECH\u542F\u7528 && HOSTS.length > 0) {
    const hostsEntries = HOSTS.map((host) => `    "${host}": ${ECH_DNS ? ECH_DNS : ""}`).join("\n");
    clash_yaml = \u63D2\u5165NameserverPolicy(clash_yaml, hostsEntries);
  }
  if (!\u9700\u8981\u5904\u7406ECH && !\u9700\u8981\u5904\u7406gRPC) return clash_yaml;
  const lines = clash_yaml.split("\n");
  const processedLines = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmedLine = line.trim();
    if (trimmedLine.startsWith("- {")) {
      let fullNode = line;
      let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      while (braceCount > 0 && i + 1 < lines.length) {
        i++;
        fullNode += "\n" + lines[i];
        braceCount += (lines[i].match(/\{/g) || []).length - (lines[i].match(/\}/g) || []).length;
      }
      if (\u9700\u8981\u5904\u7406gRPC) fullNode = \u6DFB\u52A0Flow\u683C\u5F0FgRPCUserAgent(fullNode);
      if (\u9700\u8981\u5904\u7406ECH && \u83B7\u53D6\u51ED\u636E\u503C(fullNode, true) === uuid.trim()) {
        fullNode = fullNode.replace(/\}(\s*)$/, `, ech-opts: {enable: true${ECH_SNI ? `, query-server-name: ${ECH_SNI}` : ""}}}$1`);
      }
      processedLines.push(fullNode);
      i++;
    } else if (trimmedLine.startsWith("- name:")) {
      let nodeLines = [line];
      let baseIndent = line.search(/\S/);
      let topLevelIndent = baseIndent + 2;
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        const nextTrimmed = nextLine.trim();
        if (!nextTrimmed) {
          nodeLines.push(nextLine);
          i++;
          break;
        }
        const nextIndent = nextLine.search(/\S/);
        if (nextIndent <= baseIndent && nextTrimmed.startsWith("- ")) {
          break;
        }
        if (nextIndent < baseIndent && nextTrimmed) {
          break;
        }
        nodeLines.push(nextLine);
        i++;
      }
      let nodeText = nodeLines.join("\n");
      if (\u9700\u8981\u5904\u7406gRPC && \u5339\u914D\u5230gRPC\u7F51\u7EDC(nodeText)) {
        nodeLines = \u6DFB\u52A0Block\u683C\u5F0FgRPCUserAgent(nodeLines, topLevelIndent);
        nodeText = nodeLines.join("\n");
      }
      if (\u9700\u8981\u5904\u7406ECH && \u83B7\u53D6\u51ED\u636E\u503C(nodeText, false) === uuid.trim()) nodeLines = \u6DFB\u52A0Block\u683C\u5F0FECHOpts(nodeLines, topLevelIndent);
      processedLines.push(...nodeLines);
    } else {
      processedLines.push(line);
      i++;
    }
  }
  return processedLines.join("\n");
}
__name(Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Clash\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
async function Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(SingBox_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9, config_JSON2 = {}) {
  const uuid = config_JSON2?.UUID || null;
  const fingerprint = config_JSON2?.Fingerprint || "chrome";
  const ECH\u542F\u7528 = Boolean(config_JSON2?.ECH);
  const ECH_SNI = config_JSON2?.ECHConfig?.SNI || "cloudflare-ech.com";
  const sb_json_text = SingBox_\u539F\u59CB\u8BA2\u9605\u5185\u5BB9.replace("1.1.1.1", "8.8.8.8").replace("1.0.0.1", "8.8.4.4");
  try {
    const config = JSON.parse(sb_json_text);
    const \u6570\u7EC4\u5316 = /* @__PURE__ */ __name((value) => value === void 0 || value === null ? [] : Array.isArray(value) ? value : [value], "\u6570\u7EC4\u5316");
    const \u786E\u4FDDRoute = /* @__PURE__ */ __name(() => config.route = config.route && typeof config.route === "object" ? config.route : {}, "\u786E\u4FDDRoute");
    const \u83B7\u53D6DNS\u89C4\u5219\u670D\u52A1\u5668 = /* @__PURE__ */ __name((rule) => rule && typeof rule === "object" && !Array.isArray(rule) && typeof rule.server === "string" ? rule.server : null, "\u83B7\u53D6DNS\u89C4\u5219\u670D\u52A1\u5668");
    const \u6DFB\u52A0\u89C4\u5219\u96C6 = /* @__PURE__ */ __name((type, code) => {
      if (!code || typeof code !== "string") return null;
      const route = \u786E\u4FDDRoute(), tag = `${type}-${code}`, ruleSet = Array.isArray(route.rule_set) ? route.rule_set : \u6570\u7EC4\u5316(route.rule_set);
      if (!ruleSet.some((item) => item?.tag === tag)) {
        const legacyOptions = type === "geoip" ? route.geoip : route.geosite;
        ruleSet.push({ tag, type: "remote", format: "binary", url: `https://raw.githubusercontent.com/SagerNet/sing-${type}/rule-set/${tag}.srs`, ...legacyOptions?.download_detour ? { download_detour: legacyOptions.download_detour } : {} });
        config.experimental = config.experimental && typeof config.experimental === "object" ? config.experimental : {};
        config.experimental.cache_file = config.experimental.cache_file && typeof config.experimental.cache_file === "object" ? config.experimental.cache_file : {};
        config.experimental.cache_file.enabled ??= true;
      }
      route.rule_set = ruleSet;
      return tag;
    }, "\u6DFB\u52A0\u89C4\u5219\u96C6");
    const \u8FC1\u79FB\u89C4\u5219\u96C6\u5B57\u6BB5 = /* @__PURE__ */ __name((rule) => {
      if (!rule || typeof rule !== "object" || Array.isArray(rule)) return rule;
      if (rule.type === "logical" && Array.isArray(rule.rules)) {
        rule.rules = rule.rules.map(\u8FC1\u79FB\u89C4\u5219\u96C6\u5B57\u6BB5);
        return rule;
      }
      const tags = [];
      for (const geoip of \u6570\u7EC4\u5316(rule.geoip)) {
        if (typeof geoip !== "string") continue;
        if (geoip.toLowerCase() === "private") rule.ip_is_private = true;
        else tags.push(\u6DFB\u52A0\u89C4\u5219\u96C6("geoip", geoip));
      }
      for (const sourceGeoip of \u6570\u7EC4\u5316(rule.source_geoip)) {
        if (typeof sourceGeoip !== "string") continue;
        tags.push(\u6DFB\u52A0\u89C4\u5219\u96C6("geoip", sourceGeoip));
        rule.rule_set_ip_cidr_match_source = true;
      }
      for (const geosite of \u6570\u7EC4\u5316(rule.geosite)) if (typeof geosite === "string") tags.push(\u6DFB\u52A0\u89C4\u5219\u96C6("geosite", geosite));
      if (tags.length) rule.rule_set = [...new Set([...\u6570\u7EC4\u5316(rule.rule_set), ...tags].filter(Boolean))];
      delete rule.geoip;
      delete rule.source_geoip;
      delete rule.geosite;
      return rule;
    }, "\u8FC1\u79FB\u89C4\u5219\u96C6\u5B57\u6BB5");
    const \u8FC1\u79FBDNS\u89C4\u5219 = /* @__PURE__ */ __name((rule, rcodeServerMap) => {
      rule = \u8FC1\u79FB\u89C4\u5219\u96C6\u5B57\u6BB5(rule);
      if (!rule || typeof rule !== "object" || Array.isArray(rule)) return rule;
      if (rule.type === "logical" && Array.isArray(rule.rules)) {
        rule.rules = rule.rules.map((childRule) => \u8FC1\u79FBDNS\u89C4\u5219(childRule, rcodeServerMap));
        return rule;
      }
      const serverTag = \u83B7\u53D6DNS\u89C4\u5219\u670D\u52A1\u5668(rule);
      if (serverTag && rcodeServerMap.has(serverTag)) {
        for (const key of ["server", "strategy", "disable_cache", "rewrite_ttl", "client_subnet", "timeout"]) delete rule[key];
        rule.action = "predefined";
        rule.rcode = rcodeServerMap.get(serverTag);
      } else if (serverTag && !rule.action) rule.action = "route";
      return rule;
    }, "\u8FC1\u79FBDNS\u89C4\u5219");
    if (Array.isArray(config.inbounds)) {
      for (const inbound of config.inbounds) {
        if (!inbound || typeof inbound !== "object" || inbound.type !== "tun") continue;
        for (const migration of [
          { targetKey: "address", sourceKeys: ["inet4_address", "inet6_address"] },
          { targetKey: "route_address", sourceKeys: ["inet4_route_address", "inet6_route_address"] },
          { targetKey: "route_exclude_address", sourceKeys: ["inet4_route_exclude_address", "inet6_route_exclude_address"] }
        ]) {
          const values = \u6570\u7EC4\u5316(inbound[migration.targetKey]);
          for (const sourceKey of migration.sourceKeys) values.push(...\u6570\u7EC4\u5316(inbound[sourceKey]));
          if (values.length) inbound[migration.targetKey] = [...new Set(values)];
          for (const sourceKey of migration.sourceKeys) delete inbound[sourceKey];
        }
        if (inbound.tag) {
          const addedRules = [];
          if (inbound.domain_strategy) addedRules.push({ inbound: inbound.tag, action: "resolve", strategy: inbound.domain_strategy });
          if (inbound.sniff) {
            const sniffRule = { inbound: inbound.tag, action: "sniff" };
            if (inbound.sniff_timeout) sniffRule.timeout = inbound.sniff_timeout;
            addedRules.push(sniffRule);
          }
          if (addedRules.length) {
            const route = \u786E\u4FDDRoute();
            route.rules = [...addedRules, ...\u6570\u7EC4\u5316(route.rules)];
          }
        }
        delete inbound.sniff;
        delete inbound.sniff_timeout;
        delete inbound.domain_strategy;
      }
    }
    if (config?.route && typeof config.route === "object" && Array.isArray(config.route.rules)) {
      const \u4FEE\u8865\u8DEF\u7531\u89C4\u5219 = /* @__PURE__ */ __name((rule) => {
        rule = \u8FC1\u79FB\u89C4\u5219\u96C6\u5B57\u6BB5(rule);
        if (rule?.type === "logical" && Array.isArray(rule.rules)) rule.rules = rule.rules.map(\u4FEE\u8865\u8DEF\u7531\u89C4\u5219);
        else if (rule && typeof rule === "object" && !Array.isArray(rule) && rule.outbound && !rule.action) rule.action = "route";
        return rule;
      }, "\u4FEE\u8865\u8DEF\u7531\u89C4\u5219");
      config.route.rules = config.route.rules.map(\u4FEE\u8865\u8DEF\u7531\u89C4\u5219);
    }
    const dns = config?.dns;
    if (dns && typeof dns === "object") {
      const legacyFakeIP = dns.fakeip && typeof dns.fakeip === "object" ? dns.fakeip : null;
      const rcodeServerMap = /* @__PURE__ */ new Map();
      const DNS\u5730\u5740\u534F\u8BAE\u7C7B\u578B = { "tcp:": "tcp", "udp:": "udp", "tls:": "tls", "quic:": "quic", "https:": "https", "h3:": "h3" };
      const RCode\u6620\u5C04 = { success: "NOERROR", format_error: "FORMERR", server_failure: "SERVFAIL", name_error: "NXDOMAIN", not_implemented: "NOTIMP", refused: "REFUSED" };
      let hasFakeIPServer = false;
      if (Array.isArray(dns.servers)) {
        const migratedServers = [];
        for (const originalServer of dns.servers) {
          if (!originalServer || typeof originalServer !== "object" || Array.isArray(originalServer)) {
            migratedServers.push(originalServer);
            continue;
          }
          const server = { ...originalServer };
          let parsedAddress = null, parsedRCode = "", rawAddress = typeof server.address === "string" ? server.address.trim() : "";
          if (rawAddress) {
            const lowerAddress = rawAddress.toLowerCase();
            if (lowerAddress === "fakeip") parsedAddress = { type: "fakeip" };
            else if (lowerAddress === "local") parsedAddress = { type: "local" };
            else if (lowerAddress.startsWith("rcode://")) {
              parsedAddress = { type: "rcode" };
              parsedRCode = rawAddress.slice("rcode://".length).toLowerCase();
            } else if (lowerAddress.startsWith("dhcp://")) {
              const dhcpInterface = rawAddress.slice("dhcp://".length);
              parsedAddress = dhcpInterface && dhcpInterface.toLowerCase() !== "auto" ? { type: "dhcp", interface: dhcpInterface } : { type: "dhcp" };
            } else {
              try {
                const addressURL = new URL(rawAddress);
                const type = DNS\u5730\u5740\u534F\u8BAE\u7C7B\u578B[addressURL.protocol.toLowerCase()];
                if (type) {
                  const parsedServer = addressURL.hostname?.startsWith("[") && addressURL.hostname.endsWith("]") ? addressURL.hostname.slice(1, -1) : addressURL.hostname;
                  parsedAddress = {
                    type,
                    server: parsedServer || addressURL.host || rawAddress,
                    ...addressURL.port ? { server_port: Number(addressURL.port) } : {},
                    ...(type === "https" || type === "h3") && addressURL.pathname && addressURL.pathname !== "/dns-query" ? { path: addressURL.pathname } : {}
                  };
                }
              } catch (_) {
              }
              if (!parsedAddress) parsedAddress = { type: "udp", server: rawAddress };
            }
          }
          if (parsedAddress?.type === "rcode") {
            const rcode = RCode\u6620\u5C04[parsedRCode] || "NOERROR";
            if (typeof server.tag === "string" && server.tag) {
              rcodeServerMap.set(server.tag, rcode);
              rcodeServerMap.set(server.tag.startsWith("dns_") ? server.tag.slice(4) : `dns_${server.tag}`, rcode);
            }
            continue;
          }
          if (parsedAddress) {
            delete server.address;
            Object.assign(server, parsedAddress);
          }
          if (server.address_resolver !== void 0 && server.domain_resolver === void 0) server.domain_resolver = server.address_resolver;
          if (server.address_strategy !== void 0 && server.domain_strategy === void 0) server.domain_strategy = server.address_strategy;
          delete server.address_resolver;
          delete server.address_strategy;
          if (server.detour === "DIRECT") delete server.detour;
          if (server.type === "fakeip") {
            hasFakeIPServer = true;
            if (legacyFakeIP) {
              for (const key of ["inet4_range", "inet6_range"]) {
                if (legacyFakeIP[key] !== void 0 && server[key] === void 0) server[key] = legacyFakeIP[key];
              }
            }
          }
          migratedServers.push(server);
        }
        dns.servers = migratedServers;
      }
      if (legacyFakeIP && !hasFakeIPServer && legacyFakeIP.enabled !== false) {
        const fakeIPServer = { type: "fakeip", tag: "fakeip" };
        for (const rule of Array.isArray(dns.rules) ? dns.rules : []) {
          const serverTag = \u83B7\u53D6DNS\u89C4\u5219\u670D\u52A1\u5668(rule);
          if (serverTag && serverTag.toLowerCase().includes("fakeip")) {
            fakeIPServer.tag = serverTag;
            break;
          }
        }
        for (const key of ["inet4_range", "inet6_range"]) {
          if (legacyFakeIP[key] !== void 0) fakeIPServer[key] = legacyFakeIP[key];
        }
        if (Array.isArray(dns.servers)) dns.servers.push(fakeIPServer);
        else dns.servers = [fakeIPServer];
      }
      if (Array.isArray(dns.rules)) {
        const migratedRules = [];
        for (const rule of dns.rules) {
          const serverTag = \u83B7\u53D6DNS\u89C4\u5219\u670D\u52A1\u5668(rule);
          const outbound = \u6570\u7EC4\u5316(rule?.outbound);
          const DNS\u8DEF\u7531\u9009\u9879\u5B57\u6BB5 = /* @__PURE__ */ new Set(["outbound", "server", "action", "strategy", "disable_cache", "rewrite_ttl", "client_subnet", "timeout"]);
          const isOutboundAnyDNSRule = rule && typeof rule === "object" && !Array.isArray(rule) && rule.type !== "logical" && serverTag && outbound.includes("any") && Object.keys(rule).every((key) => DNS\u8DEF\u7531\u9009\u9879\u5B57\u6BB5.has(key));
          if (isOutboundAnyDNSRule) {
            const route = \u786E\u4FDDRoute();
            if (route.default_domain_resolver === void 0) {
              const resolver = { server: serverTag };
              for (const key of ["strategy", "disable_cache", "rewrite_ttl", "client_subnet", "timeout"]) {
                if (rule[key] !== void 0) resolver[key] = rule[key];
              }
              route.default_domain_resolver = Object.keys(resolver).length === 1 ? resolver.server : resolver;
            }
            continue;
          }
          migratedRules.push(\u8FC1\u79FBDNS\u89C4\u5219(rule, rcodeServerMap));
        }
        dns.rules = migratedRules;
      }
      delete dns.fakeip;
      delete dns.independent_cache;
    }
    if (config?.route && typeof config.route === "object") {
      delete config.route.geoip;
      delete config.route.geosite;
    }
    if (config?.ntp?.detour === "DIRECT") delete config.ntp.detour;
    if (Array.isArray(config.outbounds)) {
      const outboundTags = new Set(config.outbounds.map((outbound) => outbound?.tag).filter(Boolean));
      const \u5F15\u7528REJECT = /* @__PURE__ */ __name((value) => value === "REJECT" || value && typeof value === "object" && (Array.isArray(value) ? value.some(\u5F15\u7528REJECT) : Object.values(value).some(\u5F15\u7528REJECT)), "\u5F15\u7528REJECT");
      if (!outboundTags.has("REJECT") && \u5F15\u7528REJECT({ outbounds: config.outbounds, route: config.route })) config.outbounds.push({ type: "block", tag: "REJECT" });
    }
    if (uuid) {
      config.outbounds?.forEach((outbound) => {
        if (outbound.uuid && outbound.uuid === uuid || outbound.password && outbound.password === uuid) {
          if (!outbound.tls) {
            outbound.tls = { enabled: true };
          }
          if (fingerprint) {
            outbound.tls.utls = {
              enabled: true,
              fingerprint
            };
          }
          if (ECH\u542F\u7528) {
            outbound.tls.ech = {
              enabled: true,
              query_server_name: ECH_SNI
              // 等待 1.13.0+ 版本上线
              //config: `-----BEGIN ECH CONFIGS-----\n${ech_config}\n-----END ECH CONFIGS-----`
            };
          }
        }
      });
    }
    return JSON.stringify(config, null, 2);
  } catch (e) {
    console.error("Singbox\u70ED\u8865\u4E01\u6267\u884C\u5931\u8D25:", e);
    return JSON.stringify(JSON.parse(sb_json_text), null, 2);
  }
}
__name(Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Singbox\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
function Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01(content, url, config_JSON2) {
  const \u6BCF\u884C\u5185\u5BB9 = content.includes("\r\n") ? content.split("\r\n") : content.split("\n");
  const \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = config_JSON2.\u968F\u673A\u8DEF\u5F84 ? \u968F\u673A\u8DEF\u5F84(config_JSON2.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84) : config_JSON2.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84;
  let \u8F93\u51FA\u5185\u5BB9 = "";
  for (let x of \u6BCF\u884C\u5185\u5BB9) {
    if (x.includes("= trojan,") && !x.includes("ws=true") && !x.includes("ws-path=")) {
      const host = x.split("sni=")[1].split(",")[0];
      const \u5907\u6539\u5185\u5BB9 = `sni=${host}, skip-cert-verify=${config_JSON2.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}`;
      const \u6B63\u786E\u5185\u5BB9 = `sni=${host}, skip-cert-verify=${config_JSON2.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1}, ws=true, ws-path=${\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace(/,/g, "%2C")}, ws-headers=Host:"${host}"`;
      \u8F93\u51FA\u5185\u5BB9 += x.replace(new RegExp(\u5907\u6539\u5185\u5BB9, "g"), \u6B63\u786E\u5185\u5BB9).replace("[", "").replace("]", "") + "\n";
    } else {
      \u8F93\u51FA\u5185\u5BB9 += x + "\n";
    }
  }
  \u8F93\u51FA\u5185\u5BB9 = `#!MANAGED-CONFIG ${url} interval=${config_JSON2.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBUpdateTime * 60 * 60} strict=false` + \u8F93\u51FA\u5185\u5BB9.substring(\u8F93\u51FA\u5185\u5BB9.indexOf("\n"));
  return \u8F93\u51FA\u5185\u5BB9;
}
__name(Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01, "Surge\u8BA2\u9605\u914D\u7F6E\u6587\u4EF6\u70ED\u8865\u4E01");
async function \u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55(env, request, \u8BBF\u95EEIP, \u8BF7\u6C42\u7C7B\u578B = "Get_SUB", config_JSON2, \u662F\u5426\u5199\u5165KV\u65E5\u5FD7 = true) {
  try {
    const \u5F53\u524D\u65F6\u95F4 = /* @__PURE__ */ new Date();
    const \u65E5\u5FD7\u5185\u5BB9 = { TYPE: \u8BF7\u6C42\u7C7B\u578B, IP: \u8BBF\u95EEIP, ASN: `AS${request.cf.asn || "0"} ${request.cf.asOrganization || "Unknown"}`, CC: `${request.cf.country || "N/A"} ${request.cf.city || "N/A"}`, URL: request.url, UA: request.headers.get("User-Agent") || "Unknown", TIME: \u5F53\u524D\u65F6\u95F4.getTime() };
    if (config_JSON2.TG.\u542F\u7528) {
      try {
        const TG_TXT = await env.KV.get("tg.json");
        const TG_JSON = JSON.parse(TG_TXT);
        if (TG_JSON?.BotToken && TG_JSON?.ChatID) {
          const \u8BF7\u6C42\u65F6\u95F4 = new Date(\u65E5\u5FD7\u5185\u5BB9.TIME).toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
          const \u8BF7\u6C42URL = new URL(\u65E5\u5FD7\u5185\u5BB9.URL);
          const msg = `<b>#${config_JSON2.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME} \u65E5\u5FD7\u901A\u77E5</b>

\u{1F4CC} <b>\u7C7B\u578B\uFF1A</b>#${\u65E5\u5FD7\u5185\u5BB9.TYPE}
\u{1F310} <b>IP\uFF1A</b><code>${\u65E5\u5FD7\u5185\u5BB9.IP}</code>
\u{1F4CD} <b>\u4F4D\u7F6E\uFF1A</b>${\u65E5\u5FD7\u5185\u5BB9.CC}
\u{1F3E2} <b>ASN\uFF1A</b>${\u65E5\u5FD7\u5185\u5BB9.ASN}
\u{1F517} <b>\u57DF\u540D\uFF1A</b><code>${\u8BF7\u6C42URL.host}</code>
\u{1F50D} <b>\u8DEF\u5F84\uFF1A</b><code>${\u8BF7\u6C42URL.pathname + \u8BF7\u6C42URL.search}</code>
\u{1F916} <b>UA\uFF1A</b><code>${\u65E5\u5FD7\u5185\u5BB9.UA}</code>
\u{1F4C5} <b>\u65F6\u95F4\uFF1A</b>${\u8BF7\u6C42\u65F6\u95F4}
${config_JSON2.CF.Usage.success ? `\u{1F4CA} <b>\u8BF7\u6C42\u7528\u91CF\uFF1A</b>${config_JSON2.CF.Usage.total}/${config_JSON2.CF.Usage.max} <b>${(config_JSON2.CF.Usage.total / config_JSON2.CF.Usage.max * 100).toFixed(2)}%</b>
` : ""}`;
          await fetch(`https://api.telegram.org/bot${TG_JSON.BotToken}/sendMessage?chat_id=${TG_JSON.ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`, {
            method: "GET",
            headers: {
              "Accept": "text/html,application/xhtml+xml,application/xml;",
              "Accept-Encoding": "gzip, deflate, br",
              "User-Agent": \u65E5\u5FD7\u5185\u5BB9.UA || "Unknown"
            }
          });
        }
      } catch (error) {
        console.error(`\u8BFB\u53D6tg.json\u51FA\u9519: ${error.message}`);
      }
    }
    \u662F\u5426\u5199\u5165KV\u65E5\u5FD7 = ["1", "true"].includes(env.OFF_LOG) ? false : \u662F\u5426\u5199\u5165KV\u65E5\u5FD7;
    if (!\u662F\u5426\u5199\u5165KV\u65E5\u5FD7) return;
    let \u65E5\u5FD7\u6570\u7EC4 = [];
    const \u73B0\u6709\u65E5\u5FD7 = await env.KV.get("log.json"), KV\u5BB9\u91CF\u9650\u5236 = 4;
    if (\u73B0\u6709\u65E5\u5FD7) {
      try {
        \u65E5\u5FD7\u6570\u7EC4 = JSON.parse(\u73B0\u6709\u65E5\u5FD7);
        if (!Array.isArray(\u65E5\u5FD7\u6570\u7EC4)) {
          \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
        } else if (\u8BF7\u6C42\u7C7B\u578B !== "Get_SUB") {
          const \u4E09\u5341\u5206\u949F\u524D\u65F6\u95F4\u6233 = \u5F53\u524D\u65F6\u95F4.getTime() - 30 * 60 * 1e3;
          if (\u65E5\u5FD7\u6570\u7EC4.some((log2) => log2.TYPE !== "Get_SUB" && log2.IP === \u8BBF\u95EEIP && log2.URL === request.url && log2.UA === (request.headers.get("User-Agent") || "Unknown") && log2.TIME >= \u4E09\u5341\u5206\u949F\u524D\u65F6\u95F4\u6233)) return;
          \u65E5\u5FD7\u6570\u7EC4.push(\u65E5\u5FD7\u5185\u5BB9);
          while (JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2).length > KV\u5BB9\u91CF\u9650\u5236 * 1024 * 1024 && \u65E5\u5FD7\u6570\u7EC4.length > 0) \u65E5\u5FD7\u6570\u7EC4.shift();
        } else {
          \u65E5\u5FD7\u6570\u7EC4.push(\u65E5\u5FD7\u5185\u5BB9);
          while (JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2).length > KV\u5BB9\u91CF\u9650\u5236 * 1024 * 1024 && \u65E5\u5FD7\u6570\u7EC4.length > 0) \u65E5\u5FD7\u6570\u7EC4.shift();
        }
      } catch (e) {
        \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
      }
    } else {
      \u65E5\u5FD7\u6570\u7EC4 = [\u65E5\u5FD7\u5185\u5BB9];
    }
    await env.KV.put("log.json", JSON.stringify(\u65E5\u5FD7\u6570\u7EC4, null, 2));
  } catch (error) {
    console.error(`\u65E5\u5FD7\u8BB0\u5F55\u5931\u8D25: ${error.message}`);
  }
}
__name(\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55, "\u8BF7\u6C42\u65E5\u5FD7\u8BB0\u5F55");
function \u63A9\u7801\u654F\u611F\u4FE1\u606F(\u6587\u672C, \u524D\u7F00\u957F\u5EA6 = 3, \u540E\u7F00\u957F\u5EA6 = 2) {
  if (!\u6587\u672C || typeof \u6587\u672C !== "string") return \u6587\u672C;
  if (\u6587\u672C.length <= \u524D\u7F00\u957F\u5EA6 + \u540E\u7F00\u957F\u5EA6) return \u6587\u672C;
  const \u524D\u7F00 = \u6587\u672C.slice(0, \u524D\u7F00\u957F\u5EA6);
  const \u540E\u7F00 = \u6587\u672C.slice(-\u540E\u7F00\u957F\u5EA6);
  const \u661F\u53F7\u6570\u91CF = \u6587\u672C.length - \u524D\u7F00\u957F\u5EA6 - \u540E\u7F00\u957F\u5EA6;
  return `${\u524D\u7F00}${"*".repeat(\u661F\u53F7\u6570\u91CF)}${\u540E\u7F00}`;
}
__name(\u63A9\u7801\u654F\u611F\u4FE1\u606F, "\u63A9\u7801\u654F\u611F\u4FE1\u606F");
async function MD5MD5(\u6587\u672C) {
  const \u7F16\u7801\u5668 = new TextEncoder();
  const \u7B2C\u4E00\u6B21\u54C8\u5E0C = await crypto.subtle.digest("MD5", \u7F16\u7801\u5668.encode(\u6587\u672C));
  const \u7B2C\u4E00\u6B21\u54C8\u5E0C\u6570\u7EC4 = Array.from(new Uint8Array(\u7B2C\u4E00\u6B21\u54C8\u5E0C));
  const \u7B2C\u4E00\u6B21\u5341\u516D\u8FDB\u5236 = \u7B2C\u4E00\u6B21\u54C8\u5E0C\u6570\u7EC4.map((\u5B57\u8282) => \u5B57\u8282.toString(16).padStart(2, "0")).join("");
  const \u7B2C\u4E8C\u6B21\u54C8\u5E0C = await crypto.subtle.digest("MD5", \u7F16\u7801\u5668.encode(\u7B2C\u4E00\u6B21\u5341\u516D\u8FDB\u5236.slice(7, 27)));
  const \u7B2C\u4E8C\u6B21\u54C8\u5E0C\u6570\u7EC4 = Array.from(new Uint8Array(\u7B2C\u4E8C\u6B21\u54C8\u5E0C));
  const \u7B2C\u4E8C\u6B21\u5341\u516D\u8FDB\u5236 = \u7B2C\u4E8C\u6B21\u54C8\u5E0C\u6570\u7EC4.map((\u5B57\u8282) => \u5B57\u8282.toString(16).padStart(2, "0")).join("");
  return \u7B2C\u4E8C\u6B21\u5341\u516D\u8FDB\u5236.toLowerCase();
}
__name(MD5MD5, "MD5MD5");
function \u968F\u673A\u8DEF\u5F84(\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = "/") {
  const \u5E38\u7528\u8DEF\u5F84\u76EE\u5F55 = ["about", "account", "acg", "act", "activity", "ad", "ads", "ajax", "album", "albums", "anime", "api", "app", "apps", "archive", "archives", "article", "articles", "ask", "auth", "avatar", "bbs", "bd", "blog", "blogs", "book", "books", "bt", "buy", "cart", "category", "categories", "cb", "channel", "channels", "chat", "china", "city", "class", "classify", "clip", "clips", "club", "cn", "code", "collect", "collection", "comic", "comics", "community", "company", "config", "contact", "content", "course", "courses", "cp", "data", "detail", "details", "dh", "directory", "discount", "discuss", "dl", "dload", "doc", "docs", "document", "documents", "doujin", "download", "downloads", "drama", "edu", "en", "ep", "episode", "episodes", "event", "events", "f", "faq", "favorite", "favourites", "favs", "feedback", "file", "files", "film", "films", "forum", "forums", "friend", "friends", "game", "games", "gif", "go", "go.html", "go.php", "group", "groups", "help", "home", "hot", "htm", "html", "image", "images", "img", "index", "info", "intro", "item", "items", "ja", "jp", "jump", "jump.html", "jump.php", "jumping", "knowledge", "lang", "lesson", "lessons", "lib", "library", "link", "links", "list", "live", "lives", "m", "mag", "magnet", "mall", "manhua", "map", "member", "members", "message", "messages", "mobile", "movie", "movies", "music", "my", "new", "news", "note", "novel", "novels", "online", "order", "out", "out.html", "out.php", "outbound", "p", "page", "pages", "pay", "payment", "pdf", "photo", "photos", "pic", "pics", "picture", "pictures", "play", "player", "playlist", "post", "posts", "product", "products", "program", "programs", "project", "qa", "question", "rank", "ranking", "read", "readme", "redirect", "redirect.html", "redirect.php", "reg", "register", "res", "resource", "retrieve", "sale", "search", "season", "seasons", "section", "seller", "series", "service", "services", "setting", "settings", "share", "shop", "show", "shows", "site", "soft", "sort", "source", "special", "star", "stars", "static", "stock", "store", "stream", "streaming", "streams", "student", "study", "tag", "tags", "task", "teacher", "team", "tech", "temp", "test", "thread", "tool", "tools", "topic", "topics", "torrent", "trade", "travel", "tv", "txt", "type", "u", "upload", "uploads", "url", "urls", "user", "users", "v", "version", "videos", "view", "vip", "vod", "watch", "web", "wenku", "wiki", "work", "www", "zh", "zh-cn", "zh-tw", "zip"];
  const \u968F\u673A\u6570 = Math.floor(Math.random() * 3 + 1);
  const \u968F\u673A\u8DEF\u5F842 = \u5E38\u7528\u8DEF\u5F84\u76EE\u5F55.sort(() => 0.5 - Math.random()).slice(0, \u968F\u673A\u6570).join("/");
  if (\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 === "/") return `/${\u968F\u673A\u8DEF\u5F842}`;
  else return `/${\u968F\u673A\u8DEF\u5F842 + \u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace("/?", "?")}`;
}
__name(\u968F\u673A\u8DEF\u5F84, "\u968F\u673A\u8DEF\u5F84");
function \u66FF\u6362\u661F\u53F7\u4E3A\u968F\u673A\u5B57\u7B26(\u5185\u5BB9) {
  if (typeof \u5185\u5BB9 !== "string" || !\u5185\u5BB9.includes("*")) return \u5185\u5BB9;
  const \u5B57\u7B26\u96C6 = "abcdefghijklmnopqrstuvwxyz0123456789";
  return \u5185\u5BB9.replace(/\*/g, () => {
    let s = "";
    for (let i = 0; i < Math.floor(Math.random() * 14) + 3; i++) s += \u5B57\u7B26\u96C6[Math.floor(Math.random() * \u5B57\u7B26\u96C6.length)];
    return s;
  });
}
__name(\u66FF\u6362\u661F\u53F7\u4E3A\u968F\u673A\u5B57\u7B26, "\u66FF\u6362\u661F\u53F7\u4E3A\u968F\u673A\u5B57\u7B26");
async function DoH\u67E5\u8BE2(\u57DF\u540D, \u8BB0\u5F55\u7C7B\u578B, DoH\u89E3\u6790\u670D\u52A1 = "https://cloudflare-dns.com/dns-query") {
  const \u5F00\u59CB\u65F6\u95F4 = performance.now();
  log(`[DoH\u67E5\u8BE2] \u5F00\u59CB\u67E5\u8BE2 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1}`);
  try {
    const \u7C7B\u578B\u6620\u5C04 = { "A": 1, "NS": 2, "CNAME": 5, "MX": 15, "TXT": 16, "AAAA": 28, "SRV": 33, "HTTPS": 65 };
    const qtype = \u7C7B\u578B\u6620\u5C04[\u8BB0\u5F55\u7C7B\u578B.toUpperCase()] || 1;
    const \u7F16\u7801\u57DF\u540D = /* @__PURE__ */ __name((name) => {
      const parts = name.endsWith(".") ? name.slice(0, -1).split(".") : name.split(".");
      const bufs = [];
      for (const label of parts) {
        const enc = new TextEncoder().encode(label);
        bufs.push(new Uint8Array([enc.length]), enc);
      }
      bufs.push(new Uint8Array([0]));
      const total = bufs.reduce((s, b) => s + b.length, 0);
      const result = new Uint8Array(total);
      let off = 0;
      for (const b of bufs) {
        result.set(b, off);
        off += b.length;
      }
      return result;
    }, "\u7F16\u7801\u57DF\u540D");
    const qname = \u7F16\u7801\u57DF\u540D(\u57DF\u540D);
    const query = new Uint8Array(12 + qname.length + 4);
    const qview = new DataView(query.buffer);
    qview.setUint16(0, crypto.getRandomValues(new Uint16Array(1))[0]);
    qview.setUint16(2, 256);
    qview.setUint16(4, 1);
    query.set(qname, 12);
    qview.setUint16(12 + qname.length, qtype);
    qview.setUint16(12 + qname.length + 2, 1);
    log(`[DoH\u67E5\u8BE2] \u53D1\u9001\u67E5\u8BE2\u62A5\u6587 ${\u57DF\u540D} via ${DoH\u89E3\u6790\u670D\u52A1} (type=${qtype}, ${query.length}\u5B57\u8282)`);
    const response = await fetch(DoH\u89E3\u6790\u670D\u52A1, {
      method: "POST",
      headers: {
        "Content-Type": "application/dns-message",
        "Accept": "application/dns-message"
      },
      body: query
    });
    if (!response.ok) {
      console.warn(`[DoH\u67E5\u8BE2] \u8BF7\u6C42\u5931\u8D25 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} \u54CD\u5E94\u4EE3\u7801:${response.status}`);
      return [];
    }
    const buf = new Uint8Array(await response.arrayBuffer());
    const dv = new DataView(buf.buffer);
    const qdcount = dv.getUint16(4);
    const ancount = dv.getUint16(6);
    log(`[DoH\u67E5\u8BE2] \u6536\u5230\u54CD\u5E94 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} (${buf.length}\u5B57\u8282, ${ancount}\u6761\u5E94\u7B54)`);
    const \u89E3\u6790\u57DF\u540D = /* @__PURE__ */ __name((pos) => {
      const labels = [];
      let p = pos, jumped = false, endPos = -1, safe = 128;
      while (p < buf.length && safe-- > 0) {
        const len = buf[p];
        if (len === 0) {
          if (!jumped) endPos = p + 1;
          break;
        }
        if ((len & 192) === 192) {
          if (!jumped) endPos = p + 2;
          p = (len & 63) << 8 | buf[p + 1];
          jumped = true;
          continue;
        }
        labels.push(new TextDecoder().decode(buf.slice(p + 1, p + 1 + len)));
        p += len + 1;
      }
      if (endPos === -1) endPos = p + 1;
      return [labels.join("."), endPos];
    }, "\u89E3\u6790\u57DF\u540D");
    let offset = 12;
    for (let i = 0; i < qdcount; i++) {
      const [, end] = \u89E3\u6790\u57DF\u540D(offset);
      offset = /** @type {number} */
      end + 4;
    }
    const answers = [];
    for (let i = 0; i < ancount && offset < buf.length; i++) {
      const [name, nameEnd] = \u89E3\u6790\u57DF\u540D(offset);
      offset = /** @type {number} */
      nameEnd;
      const type = dv.getUint16(offset);
      offset += 2;
      offset += 2;
      const ttl = dv.getUint32(offset);
      offset += 4;
      const rdlen = dv.getUint16(offset);
      offset += 2;
      const rdata = buf.slice(offset, offset + rdlen);
      offset += rdlen;
      let data;
      if (type === 1 && rdlen === 4) {
        data = `${rdata[0]}.${rdata[1]}.${rdata[2]}.${rdata[3]}`;
      } else if (type === 28 && rdlen === 16) {
        const segs = [];
        for (let j = 0; j < 16; j += 2) segs.push((rdata[j] << 8 | rdata[j + 1]).toString(16));
        data = segs.join(":");
      } else if (type === 16) {
        let tOff = 0;
        const parts = [];
        while (tOff < rdlen) {
          const tLen = rdata[tOff++];
          parts.push(new TextDecoder().decode(rdata.slice(tOff, tOff + tLen)));
          tOff += tLen;
        }
        data = parts.join("");
      } else if (type === 5) {
        const [cname] = \u89E3\u6790\u57DF\u540D(offset - rdlen);
        data = cname;
      } else {
        data = Array.from(rdata).map((b) => b.toString(16).padStart(2, "0")).join("");
      }
      answers.push({ name, type, TTL: ttl, data, rdata });
    }
    const \u8017\u65F6 = (performance.now() - \u5F00\u59CB\u65F6\u95F4).toFixed(2);
    log(`[DoH\u67E5\u8BE2] \u67E5\u8BE2\u5B8C\u6210 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} ${\u8017\u65F6}ms \u5171${answers.length}\u6761\u7ED3\u679C${answers.length > 0 ? "\n" + answers.map((a, i) => `  ${i + 1}. ${a.name} type=${a.type} TTL=${a.TTL} data=${a.data}`).join("\n") : ""}`);
    return answers;
  } catch (error) {
    const \u8017\u65F6 = (performance.now() - \u5F00\u59CB\u65F6\u95F4).toFixed(2);
    console.error(`[DoH\u67E5\u8BE2] \u67E5\u8BE2\u5931\u8D25 ${\u57DF\u540D} ${\u8BB0\u5F55\u7C7B\u578B} via ${DoH\u89E3\u6790\u670D\u52A1} ${\u8017\u65F6}ms:`, error);
    return [];
  }
}
__name(DoH\u67E5\u8BE2, "DoH\u67E5\u8BE2");
async function \u8BFB\u53D6config_JSON(env, hostname, userID, UA = "Mozilla/5.0", \u91CD\u7F6E\u914D\u7F6E = false) {
  const _p = atob("UFJPWFlJUA==");
  const host = hostname, Ali_DoH = "https://dns.alidns.com/dns-query", ECH_SNI = "cloudflare-ech.com", \u5360\u4F4D\u7B26 = "{{IP:PORT}}", \u521D\u59CB\u5316\u5F00\u59CB\u65F6\u95F4 = performance.now(), \u9ED8\u8BA4\u914D\u7F6EJSON = {
    TIME: (/* @__PURE__ */ new Date()).toISOString(),
    HOST: host,
    HOSTS: [hostname],
    UUID: userID,
    PATH: "/",
    \u534F\u8BAE\u7C7B\u578B: "vless",
    \u4F20\u8F93\u534F\u8BAE: "ws",
    gRPC\u6A21\u5F0F: "gun",
    gRPCUserAgent: UA,
    \u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1: false,
    \u542F\u75280RTT: false,
    TLS\u5206\u7247: null,
    \u968F\u673A\u8DEF\u5F84: false,
    ECH: false,
    ECHConfig: {
      DNS: Ali_DoH,
      SNI: ECH_SNI
    },
    SS: {
      \u52A0\u5BC6\u65B9\u5F0F: "aes-128-gcm",
      TLS: true
    },
    Fingerprint: "chrome",
    \u4F18\u9009\u8BA2\u9605\u751F\u6210: {
      local: true,
      // true: 基于本地的优选地址  false: 优选订阅生成器
      \u672C\u5730IP\u5E93: {
        \u968F\u673AIP: true,
        // 当 随机IP 为true时生效，启用随机IP的数量，否则使用KV内的ADD.txt
        \u968F\u673A\u6570\u91CF: 16,
        \u6307\u5B9A\u7AEF\u53E3: -1
      },
      SUB: null,
      SUBNAME: "edgetunnel",
      SUBUpdateTime: 3,
      // 订阅更新时间（小时）
      TOKEN: await MD5MD5(hostname + userID)
    },
    \u8BA2\u9605\u8F6C\u6362\u914D\u7F6E: {
      SUBAPI: "https://SUBAPI.cmliussss.net",
      SUBCONFIG: "https://raw.githubusercontent.com/cmliu/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini",
      SUBEMOJI: false
    },
    \u53CD\u4EE3: {
      [_p]: "auto",
      SOCKS5: {
        \u542F\u7528: \u542F\u7528SOCKS5\u53CD\u4EE3,
        \u5168\u5C40: \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3,
        \u8D26\u53F7: \u6211\u7684SOCKS5\u8D26\u53F7,
        \u767D\u540D\u5355: SOCKS5\u767D\u540D\u5355
      },
      \u8DEF\u5F84\u6A21\u677F: {
        [_p]: "proxyip=" + \u5360\u4F4D\u7B26,
        SOCKS5: {
          \u5168\u5C40: "socks5://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "socks5=" + \u5360\u4F4D\u7B26
        },
        HTTP: {
          \u5168\u5C40: "http://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "http=" + \u5360\u4F4D\u7B26
        },
        HTTPS: {
          \u5168\u5C40: "https://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "https=" + \u5360\u4F4D\u7B26
        },
        TURN: {
          \u5168\u5C40: "turn://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "turn=" + \u5360\u4F4D\u7B26
        },
        SSTP: {
          \u5168\u5C40: "sstp://" + \u5360\u4F4D\u7B26,
          \u6807\u51C6: "sstp=" + \u5360\u4F4D\u7B26
        }
      }
    },
    TG: {
      \u542F\u7528: false,
      BotToken: null,
      ChatID: null
    },
    CF: {
      Email: null,
      GlobalAPIKey: null,
      AccountID: null,
      APIToken: null,
      UsageAPI: null,
      Usage: {
        success: false,
        pages: 0,
        workers: 0,
        total: 0,
        max: 1e5
      }
    }
  };
  try {
    let configJSON = await env.KV.get("config.json");
    if (!configJSON || \u91CD\u7F6E\u914D\u7F6E == true) {
      await env.KV.put("config.json", JSON.stringify(\u9ED8\u8BA4\u914D\u7F6EJSON, null, 2));
      config_JSON = \u9ED8\u8BA4\u914D\u7F6EJSON;
    } else {
      config_JSON = JSON.parse(configJSON);
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6config_JSON\u51FA\u9519: ${error.message}`);
    config_JSON = \u9ED8\u8BA4\u914D\u7F6EJSON;
  }
  if (!config_JSON.gRPCUserAgent) config_JSON.gRPCUserAgent = UA;
  config_JSON.HOST = host;
  if (!config_JSON.HOSTS) config_JSON.HOSTS = [hostname];
  if (env.HOST) config_JSON.HOSTS = (await \u6574\u7406\u6210\u6570\u7EC4(env.HOST)).map((h) => h.toLowerCase().replace(/^https?:\/\//, "").split("/")[0].split(":")[0]);
  config_JSON.UUID = userID;
  if (!config_JSON.\u968F\u673A\u8DEF\u5F84) config_JSON.\u968F\u673A\u8DEF\u5F84 = false;
  if (!config_JSON.\u542F\u75280RTT) config_JSON.\u542F\u75280RTT = false;
  if (env.PATH) config_JSON.PATH = env.PATH.startsWith("/") ? env.PATH : "/" + env.PATH;
  else if (!config_JSON.PATH) config_JSON.PATH = "/";
  if (!config_JSON.gRPC\u6A21\u5F0F) config_JSON.gRPC\u6A21\u5F0F = "gun";
  if (!config_JSON.SS) config_JSON.SS = { \u52A0\u5BC6\u65B9\u5F0F: "aes-128-gcm", TLS: false };
  if (!config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F?.[_p]) {
    config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F = {
      [_p]: "proxyip=" + \u5360\u4F4D\u7B26,
      SOCKS5: {
        \u5168\u5C40: "socks5://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "socks5=" + \u5360\u4F4D\u7B26
      },
      HTTP: {
        \u5168\u5C40: "http://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "http=" + \u5360\u4F4D\u7B26
      },
      HTTPS: {
        \u5168\u5C40: "https://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "https=" + \u5360\u4F4D\u7B26
      },
      TURN: {
        \u5168\u5C40: "turn://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "turn=" + \u5360\u4F4D\u7B26
      },
      SSTP: {
        \u5168\u5C40: "sstp://" + \u5360\u4F4D\u7B26,
        \u6807\u51C6: "sstp=" + \u5360\u4F4D\u7B26
      }
    };
  }
  if (!config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.HTTPS) config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.HTTPS = { \u5168\u5C40: "https://" + \u5360\u4F4D\u7B26, \u6807\u51C6: "https=" + \u5360\u4F4D\u7B26 };
  if (!config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.TURN) config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.TURN = { \u5168\u5C40: "turn://" + \u5360\u4F4D\u7B26, \u6807\u51C6: "turn=" + \u5360\u4F4D\u7B26 };
  if (!config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.SSTP) config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F.SSTP = { \u5168\u5C40: "sstp://" + \u5360\u4F4D\u7B26, \u6807\u51C6: "sstp=" + \u5360\u4F4D\u7B26 };
  const \u4EE3\u7406\u914D\u7F6E = config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F[config_JSON.\u53CD\u4EE3.SOCKS5.\u542F\u7528?.toUpperCase()];
  let \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = "";
  if (\u4EE3\u7406\u914D\u7F6E && config_JSON.\u53CD\u4EE3.SOCKS5.\u8D26\u53F7) \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = (config_JSON.\u53CD\u4EE3.SOCKS5.\u5168\u5C40 ? \u4EE3\u7406\u914D\u7F6E.\u5168\u5C40 : \u4EE3\u7406\u914D\u7F6E.\u6807\u51C6).replace(\u5360\u4F4D\u7B26, config_JSON.\u53CD\u4EE3.SOCKS5.\u8D26\u53F7);
  else if (config_JSON.\u53CD\u4EE3[_p] !== "auto") \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = config_JSON.\u53CD\u4EE3.\u8DEF\u5F84\u6A21\u677F[_p].replace(\u5360\u4F4D\u7B26, config_JSON.\u53CD\u4EE3[_p]);
  let \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 = "";
  if (\u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570.includes("?")) {
    const [\u53CD\u4EE3\u8DEF\u5F84\u90E8\u5206, \u53CD\u4EE3\u67E5\u8BE2\u90E8\u5206] = \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570.split("?");
    \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 = \u53CD\u4EE3\u8DEF\u5F84\u90E8\u5206;
    \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 = \u53CD\u4EE3\u67E5\u8BE2\u90E8\u5206;
  }
  config_JSON.PATH = config_JSON.PATH.replace(\u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570, "").replace("//", "/");
  const normalizedPath = config_JSON.PATH === "/" ? "" : config_JSON.PATH.replace(/\/+(?=\?|$)/, "").replace(/\/+$/, "");
  const [\u8DEF\u5F84\u90E8\u5206, ...\u67E5\u8BE2\u6570\u7EC4] = normalizedPath.split("?");
  const \u67E5\u8BE2\u90E8\u5206 = \u67E5\u8BE2\u6570\u7EC4.length ? "?" + \u67E5\u8BE2\u6570\u7EC4.join("?") : "";
  const \u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 = \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 ? \u67E5\u8BE2\u90E8\u5206 ? \u67E5\u8BE2\u90E8\u5206 + "&" + \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 : "?" + \u53CD\u4EE3\u67E5\u8BE2\u53C2\u6570 : \u67E5\u8BE2\u90E8\u5206;
  config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 = (\u8DEF\u5F84\u90E8\u5206 || "/") + (\u8DEF\u5F84\u90E8\u5206 && \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 ? "/" : "") + \u8DEF\u5F84\u53CD\u4EE3\u53C2\u6570 + \u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 + (config_JSON.\u542F\u75280RTT ? (\u6700\u7EC8\u67E5\u8BE2\u90E8\u5206 ? "&" : "?") + "ed=2560" : "");
  if (!config_JSON.TLS\u5206\u7247 && config_JSON.TLS\u5206\u7247 !== null) config_JSON.TLS\u5206\u7247 = null;
  const TLS\u5206\u7247\u53C2\u6570 = config_JSON.TLS\u5206\u7247 == "Shadowrocket" ? `&fragment=${encodeURIComponent("1,40-60,30-50,tlshello")}` : config_JSON.TLS\u5206\u7247 == "Happ" ? `&fragment=${encodeURIComponent("3,1,tlshello")}` : "";
  if (!config_JSON.Fingerprint) config_JSON.Fingerprint = "chrome";
  if (!config_JSON.ECH) config_JSON.ECH = false;
  if (!config_JSON.ECHConfig) config_JSON.ECHConfig = { DNS: Ali_DoH, SNI: ECH_SNI };
  const ECHLINK\u53C2\u6570 = config_JSON.ECH ? `&ech=${encodeURIComponent((config_JSON.ECHConfig.SNI ? config_JSON.ECHConfig.SNI + "+" : "") + config_JSON.ECHConfig.DNS)}` : "";
  const { type: \u4F20\u8F93\u534F\u8BAE, \u8DEF\u5F84\u5B57\u6BB5\u540D, \u57DF\u540D\u5B57\u6BB5\u540D } = \u83B7\u53D6\u4F20\u8F93\u534F\u8BAE\u914D\u7F6E(config_JSON);
  const \u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C = \u83B7\u53D6\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C(config_JSON, config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84);
  config_JSON.LINK = config_JSON.\u534F\u8BAE\u7C7B\u578B === "ss" ? `${config_JSON.\u534F\u8BAE\u7C7B\u578B}://${btoa(config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F + ":" + userID)}@${host}:${config_JSON.SS.TLS ? "443" : "80"}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${host};path=${(config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.includes("?") ? config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84.replace("?", "?enc=" + config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F + "&") : config_JSON.\u5B8C\u6574\u8282\u70B9\u8DEF\u5F84 + "?enc=" + config_JSON.SS.\u52A0\u5BC6\u65B9\u5F0F) + (config_JSON.SS.TLS ? ";tls" : "")};mux=0`) + ECHLINK\u53C2\u6570}#${encodeURIComponent(config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME)}` : `${config_JSON.\u534F\u8BAE\u7C7B\u578B}://${userID}@${host}:443?security=tls&type=${\u4F20\u8F93\u534F\u8BAE + ECHLINK\u53C2\u6570}&${\u57DF\u540D\u5B57\u6BB5\u540D}=${host}&fp=${config_JSON.Fingerprint}&sni=${host}&${\u8DEF\u5F84\u5B57\u6BB5\u540D}=${encodeURIComponent(\u4F20\u8F93\u8DEF\u5F84\u53C2\u6570\u503C) + TLS\u5206\u7247\u53C2\u6570}&encryption=none${config_JSON.\u8DF3\u8FC7\u8BC1\u4E66\u9A8C\u8BC1 ? "&insecure=1&allowInsecure=1" : ""}#${encodeURIComponent(config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.SUBNAME)}`;
  config_JSON.\u4F18\u9009\u8BA2\u9605\u751F\u6210.TOKEN = await MD5MD5(hostname + userID);
  const \u521D\u59CB\u5316TG_JSON = { BotToken: null, ChatID: null };
  config_JSON.TG = { \u542F\u7528: config_JSON.TG.\u542F\u7528 ? config_JSON.TG.\u542F\u7528 : false, ...\u521D\u59CB\u5316TG_JSON };
  try {
    const TG_TXT = await env.KV.get("tg.json");
    if (!TG_TXT) {
      await env.KV.put("tg.json", JSON.stringify(\u521D\u59CB\u5316TG_JSON, null, 2));
    } else {
      const TG_JSON = JSON.parse(TG_TXT);
      config_JSON.TG.ChatID = TG_JSON.ChatID ? TG_JSON.ChatID : null;
      config_JSON.TG.BotToken = TG_JSON.BotToken ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(TG_JSON.BotToken) : null;
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6tg.json\u51FA\u9519: ${error.message}`);
  }
  const \u521D\u59CB\u5316CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
  config_JSON.CF = { ...\u521D\u59CB\u5316CF_JSON, Usage: { success: false, pages: 0, workers: 0, total: 0, max: 1e5 } };
  try {
    const CF_TXT = await env.KV.get("cf.json");
    if (!CF_TXT) {
      await env.KV.put("cf.json", JSON.stringify(\u521D\u59CB\u5316CF_JSON, null, 2));
    } else {
      const CF_JSON = JSON.parse(CF_TXT);
      if (CF_JSON.UsageAPI) {
        try {
          const response = await fetch(CF_JSON.UsageAPI);
          const Usage = await response.json();
          config_JSON.CF.Usage = Usage;
        } catch (err) {
          console.error(`\u8BF7\u6C42 CF_JSON.UsageAPI \u5931\u8D25: ${err.message}`);
        }
      } else {
        config_JSON.CF.Email = CF_JSON.Email ? CF_JSON.Email : null;
        config_JSON.CF.GlobalAPIKey = CF_JSON.GlobalAPIKey ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.GlobalAPIKey) : null;
        config_JSON.CF.AccountID = CF_JSON.AccountID ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.AccountID) : null;
        config_JSON.CF.APIToken = CF_JSON.APIToken ? \u63A9\u7801\u654F\u611F\u4FE1\u606F(CF_JSON.APIToken) : null;
        config_JSON.CF.UsageAPI = null;
        const Usage = await getCloudflareUsage(CF_JSON.Email, CF_JSON.GlobalAPIKey, CF_JSON.AccountID, CF_JSON.APIToken);
        config_JSON.CF.Usage = Usage;
      }
    }
  } catch (error) {
    console.error(`\u8BFB\u53D6cf.json\u51FA\u9519: ${error.message}`);
  }
  config_JSON.\u52A0\u8F7D\u65F6\u95F4 = (performance.now() - \u521D\u59CB\u5316\u5F00\u59CB\u65F6\u95F4).toFixed(2) + "ms";
  return config_JSON;
}
__name(\u8BFB\u53D6config_JSON, "\u8BFB\u53D6config_JSON");
function \u8BC6\u522B\u8FD0\u8425\u5546(request) {
  const cf = request?.cf;
  const ASN\u8FD0\u8425\u5546\u6620\u5C04 = {
    "4134": "ct",
    "4809": "ct",
    "4811": "ct",
    "4812": "ct",
    "4815": "ct",
    "4837": "cu",
    "4814": "cu",
    "9929": "cu",
    "17623": "cu",
    "17816": "cu",
    "9808": "cmcc",
    "24400": "cmcc",
    "56040": "cmcc",
    "56041": "cmcc",
    "56044": "cmcc"
  };
  const \u8FD0\u8425\u5546\u5173\u952E\u8BCD\u6620\u5C04 = [
    { code: "ct", pattern: /chinanet|chinatelecom|china telecom|cn2|shtel/ },
    { code: "cmcc", pattern: /cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/ },
    { code: "cu", pattern: /china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/ }
  ];
  if (String(cf?.country || "").toLowerCase() !== "cn") return "cf";
  const \u7EC4\u7EC7\u540D\u79F0 = String(cf?.asOrganization || "").toLowerCase();
  const \u547D\u4E2D\u8FD0\u8425\u5546 = \u8FD0\u8425\u5546\u5173\u952E\u8BCD\u6620\u5C04.find(({ pattern }) => pattern.test(\u7EC4\u7EC7\u540D\u79F0))?.code;
  return \u547D\u4E2D\u8FD0\u8425\u5546 || ASN\u8FD0\u8425\u5546\u6620\u5C04[String(cf?.asn || "")] || "cf";
}
__name(\u8BC6\u522B\u8FD0\u8425\u5546, "\u8BC6\u522B\u8FD0\u8425\u5546");
async function \u751F\u6210\u968F\u673AIP(request, count = 16, \u6307\u5B9A\u7AEF\u53E3 = -1) {
  const url = new URL(request.url);
  const \u67E5\u8BE2\u53C2\u6570\u8FD0\u8425\u5546 = String(url.searchParams.get("asOrg") || "").toLowerCase();
  const \u8FD0\u8425\u5546\u6587\u4EF6\u6807\u8BC6 = ["ct", "cu", "cmcc", "cf"].includes(\u67E5\u8BE2\u53C2\u6570\u8FD0\u8425\u5546) ? \u67E5\u8BE2\u53C2\u6570\u8FD0\u8425\u5546 : \u8BC6\u522B\u8FD0\u8425\u5546(request);
  const \u8FD0\u8425\u5546\u540D\u79F0\u6620\u5C04 = {
    cmcc: "CF\u79FB\u52A8\u4F18\u9009",
    cu: "CF\u8054\u901A\u4F18\u9009",
    ct: "CF\u7535\u4FE1\u4F18\u9009",
    cf: "CF\u5B98\u65B9\u4F18\u9009"
  };
  const cidr_url = \u8FD0\u8425\u5546\u6587\u4EF6\u6807\u8BC6 === "cf" ? "https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR.txt" : `https://raw.githubusercontent.com/cmliu/cmliu/main/CF-CIDR/${\u8FD0\u8425\u5546\u6587\u4EF6\u6807\u8BC6}.txt`;
  const cfname = \u8FD0\u8425\u5546\u540D\u79F0\u6620\u5C04[\u8FD0\u8425\u5546\u6587\u4EF6\u6807\u8BC6] || "CF\u5B98\u65B9\u4F18\u9009";
  const cfport = [443, 2053, 2083, 2087, 2096, 8443];
  let cidrList = [];
  try {
    const res = await fetch(cidr_url);
    cidrList = res.ok ? await \u6574\u7406\u6210\u6570\u7EC4(await res.text()) : ["104.16.0.0/13"];
  } catch {
    cidrList = ["104.16.0.0/13"];
  }
  const generateRandomIPFromCIDR = /* @__PURE__ */ __name((cidr) => {
    const [baseIP, prefixLength] = cidr.split("/"), prefix = parseInt(prefixLength), hostBits = 32 - prefix;
    const ipInt = baseIP.split(".").reduce((a, p, i) => a | parseInt(p) << 24 - i * 8, 0);
    const randomOffset = Math.floor(Math.random() * Math.pow(2, hostBits));
    const mask = 4294967295 << hostBits >>> 0, randomIP = ((ipInt & mask) >>> 0) + randomOffset >>> 0;
    return [randomIP >>> 24 & 255, randomIP >>> 16 & 255, randomIP >>> 8 & 255, randomIP & 255].join(".");
  }, "generateRandomIPFromCIDR");
  const randomIPs = Array.from({ length: count }, (_, index) => {
    const ip = generateRandomIPFromCIDR(cidrList[Math.floor(Math.random() * cidrList.length)]);
    const \u76EE\u6807\u7AEF\u53E3 = \u6307\u5B9A\u7AEF\u53E3 === -1 ? cfport[Math.floor(Math.random() * cfport.length)] : \u6307\u5B9A\u7AEF\u53E3;
    return `${ip}:${\u76EE\u6807\u7AEF\u53E3}#${cfname}${index + 1}`;
  });
  return [randomIPs, randomIPs.join("\n")];
}
__name(\u751F\u6210\u968F\u673AIP, "\u751F\u6210\u968F\u673AIP");
async function \u6574\u7406\u6210\u6570\u7EC4(\u5185\u5BB9) {
  var \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u5185\u5BB9.replace(/[	"'\r\n]+/g, ",").replace(/,+/g, ",");
  if (\u66FF\u6362\u540E\u7684\u5185\u5BB9.charAt(0) == ",") \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.slice(1);
  if (\u66FF\u6362\u540E\u7684\u5185\u5BB9.charAt(\u66FF\u6362\u540E\u7684\u5185\u5BB9.length - 1) == ",") \u66FF\u6362\u540E\u7684\u5185\u5BB9 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.slice(0, \u66FF\u6362\u540E\u7684\u5185\u5BB9.length - 1);
  const \u5730\u5740\u6570\u7EC4 = \u66FF\u6362\u540E\u7684\u5185\u5BB9.split(",");
  return \u5730\u5740\u6570\u7EC4;
}
__name(\u6574\u7406\u6210\u6570\u7EC4, "\u6574\u7406\u6210\u6570\u7EC4");
async function \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST) {
  let \u4F18\u9009IP = [], \u5176\u4ED6\u8282\u70B9LINK = "", \u683C\u5F0F\u5316HOST = \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST.replace(/^sub:\/\//i, "https://").split("#")[0].split("?")[0];
  if (!/^https?:\/\//i.test(\u683C\u5F0F\u5316HOST)) \u683C\u5F0F\u5316HOST = `https://${\u683C\u5F0F\u5316HOST}`;
  try {
    const url = new URL(\u683C\u5F0F\u5316HOST);
    \u683C\u5F0F\u5316HOST = url.origin;
  } catch (error) {
    \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u683C\u5F0F\u5316\u5F02\u5E38:${error.message}`);
    return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
  }
  const \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668URL = `${\u683C\u5F0F\u5316HOST}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;
  try {
    const response = await fetch(\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668URL, {
      headers: { "User-Agent": "v2rayN/edgetunnel (https://github.com/cmliu/edgetunnel)" }
    });
    if (!response.ok) {
      \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u5F02\u5E38:${response.statusText}`);
      return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
    }
    const \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9 = atob(await response.text());
    const \u8BA2\u9605\u884C\u5217\u8868 = \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.includes("\r\n") ? \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.split("\r\n") : \u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u8FD4\u56DE\u8BA2\u9605\u5185\u5BB9.split("\n");
    for (const \u884C\u5185\u5BB9 of \u8BA2\u9605\u884C\u5217\u8868) {
      if (!\u884C\u5185\u5BB9.trim()) continue;
      if (\u884C\u5185\u5BB9.includes("00000000-0000-4000-8000-000000000000") && \u884C\u5185\u5BB9.includes("example.com")) {
        const \u5730\u5740\u5339\u914D = \u884C\u5185\u5BB9.match(/:\/\/[^@]+@([^?]+)/);
        if (\u5730\u5740\u5339\u914D) {
          let \u5730\u5740\u7AEF\u53E3 = \u5730\u5740\u5339\u914D[1], \u5907\u6CE8 = "";
          const \u5907\u6CE8\u5339\u914D = \u884C\u5185\u5BB9.match(/#(.+)$/);
          if (\u5907\u6CE8\u5339\u914D) \u5907\u6CE8 = "#" + decodeURIComponent(\u5907\u6CE8\u5339\u914D[1]);
          \u4F18\u9009IP.push(\u5730\u5740\u7AEF\u53E3 + \u5907\u6CE8);
        }
      } else {
        \u5176\u4ED6\u8282\u70B9LINK += \u884C\u5185\u5BB9 + "\n";
      }
    }
  } catch (error) {
    \u4F18\u9009IP.push(`127.0.0.1:1234#${\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668HOST}\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u5F02\u5E38:${error.message}`);
  }
  return [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK];
}
__name(\u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E, "\u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E");
async function \u8BF7\u6C42\u4F18\u9009API(urls, \u9ED8\u8BA4\u7AEF\u53E3 = "443", \u8D85\u65F6\u65F6\u95F4 = 3e3) {
  if (!urls?.length) return [[], [], [], []];
  const results = /* @__PURE__ */ new Set(), \u53CD\u4EE3IP\u6C60 = /* @__PURE__ */ new Set();
  let \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 = "", \u9700\u8981\u8BA2\u9605\u8F6C\u6362\u8BA2\u9605URLs = [];
  await Promise.allSettled(urls.map(async (url) => {
    const hashIndex = url.indexOf("#");
    const urlWithoutHash = hashIndex > -1 ? url.substring(0, hashIndex) : url;
    const API\u5907\u6CE8\u540D = hashIndex > -1 ? decodeURIComponent(url.substring(hashIndex + 1)) : null;
    const \u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP = url.toLowerCase().includes("proxyip=true");
    if (urlWithoutHash.toLowerCase().startsWith("sub://")) {
      try {
        const [\u4F18\u9009IP, \u5176\u4ED6\u8282\u70B9LINK] = await \u83B7\u53D6\u4F18\u9009\u8BA2\u9605\u751F\u6210\u5668\u6570\u636E(urlWithoutHash);
        if (API\u5907\u6CE8\u540D) {
          for (const ip of \u4F18\u9009IP) {
            const \u5904\u7406\u540EIP = ip.includes("#") ? `${ip} [${API\u5907\u6CE8\u540D}]` : `${ip}#[${API\u5907\u6CE8\u540D}]`;
            results.add(\u5904\u7406\u540EIP);
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ip.split("#")[0]);
          }
        } else {
          for (const ip of \u4F18\u9009IP) {
            results.add(ip);
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ip.split("#")[0]);
          }
        }
        if (\u5176\u4ED6\u8282\u70B9LINK && typeof \u5176\u4ED6\u8282\u70B9LINK === "string" && API\u5907\u6CE8\u540D) {
          const \u5904\u7406\u540ELINK\u5185\u5BB9 = \u5176\u4ED6\u8282\u70B9LINK.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (match, link, lineEnd) => {
            const \u5B8C\u6574\u94FE\u63A5 = link.includes("#") ? `${link}${encodeURIComponent(` [${API\u5907\u6CE8\u540D}]`)}` : `${link}${encodeURIComponent(`#[${API\u5907\u6CE8\u540D}]`)}`;
            return `${\u5B8C\u6574\u94FE\u63A5}${lineEnd}`;
          });
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5904\u7406\u540ELINK\u5185\u5BB9;
        } else if (\u5176\u4ED6\u8282\u70B9LINK && typeof \u5176\u4ED6\u8282\u70B9LINK === "string") {
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5176\u4ED6\u8282\u70B9LINK;
        }
      } catch (e) {
      }
      return;
    }
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), \u8D85\u65F6\u65F6\u95F4);
      const response = await fetch(urlWithoutHash, { signal: controller.signal });
      clearTimeout(timeoutId);
      let text = "";
      try {
        const buffer = await response.arrayBuffer();
        const contentType = (response.headers.get("content-type") || "").toLowerCase();
        const charset = contentType.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || "";
        let decoders = ["utf-8", "gb2312"];
        if (charset.includes("gb") || charset.includes("gbk") || charset.includes("gb2312")) {
          decoders = ["gb2312", "utf-8"];
        }
        let decodeSuccess = false;
        for (const decoder of decoders) {
          try {
            const decoded = new TextDecoder(decoder).decode(buffer);
            if (decoded && decoded.length > 0 && !decoded.includes("\uFFFD")) {
              text = decoded;
              decodeSuccess = true;
              break;
            } else if (decoded && decoded.length > 0) {
              continue;
            }
          } catch (e) {
            continue;
          }
        }
        if (!decodeSuccess) {
          text = await response.text();
        }
        if (!text || text.trim().length === 0) {
          return;
        }
      } catch (e) {
        console.error("Failed to decode response:", e);
        return;
      }
      let \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9 = text;
      const cleanText = typeof text === "string" ? text.replace(/\s/g, "") : "";
      if (cleanText.length > 0 && cleanText.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(cleanText)) {
        try {
          const bytes = new Uint8Array(atob(cleanText).split("").map((c) => c.charCodeAt(0)));
          \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9 = new TextDecoder("utf-8").decode(bytes);
        } catch {
        }
      }
      if (\u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9.split("#")[0].includes("://")) {
        if (API\u5907\u6CE8\u540D) {
          const \u5904\u7406\u540ELINK\u5185\u5BB9 = \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (match, link, lineEnd) => {
            const \u5B8C\u6574\u94FE\u63A5 = link.includes("#") ? `${link}${encodeURIComponent(` [${API\u5907\u6CE8\u540D}]`)}` : `${link}${encodeURIComponent(`#[${API\u5907\u6CE8\u540D}]`)}`;
            return `${\u5B8C\u6574\u94FE\u63A5}${lineEnd}`;
          });
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u5904\u7406\u540ELINK\u5185\u5BB9 + "\n";
        } else {
          \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9 += \u9884\u5904\u7406\u8BA2\u9605\u660E\u6587\u5185\u5BB9 + "\n";
        }
        return;
      }
      const lines = text.trim().split("\n").map((l) => l.trim()).filter((l) => l);
      const isCSV = lines.length > 1 && lines[0].includes(",");
      const IPV6_PATTERN = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
      const parsedUrl = new URL(urlWithoutHash);
      if (!isCSV) {
        lines.forEach((line) => {
          const lineHashIndex = line.indexOf("#");
          const [hostPart, remark] = lineHashIndex > -1 ? [line.substring(0, lineHashIndex), line.substring(lineHashIndex)] : [line, ""];
          let hasPort = false;
          if (hostPart.startsWith("[")) {
            hasPort = /\]:(\d+)$/.test(hostPart);
          } else {
            const colonIndex = hostPart.lastIndexOf(":");
            hasPort = colonIndex > -1 && /^\d+$/.test(hostPart.substring(colonIndex + 1));
          }
          const port = parsedUrl.searchParams.get("port") || \u9ED8\u8BA4\u7AEF\u53E3;
          const ipItem = hasPort ? line : `${hostPart}:${port}${remark}`;
          if (API\u5907\u6CE8\u540D) {
            const \u5904\u7406\u540EIP = ipItem.includes("#") ? `${ipItem} [${API\u5907\u6CE8\u540D}]` : `${ipItem}#[${API\u5907\u6CE8\u540D}]`;
            results.add(\u5904\u7406\u540EIP);
          } else {
            results.add(ipItem);
          }
          if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(ipItem.split("#")[0]);
        });
      } else {
        const headers = lines[0].split(",").map((h) => h.trim());
        const dataLines = lines.slice(1);
        if (headers.includes("IP\u5730\u5740") && headers.includes("\u7AEF\u53E3") && headers.includes("\u6570\u636E\u4E2D\u5FC3")) {
          const ipIdx = headers.indexOf("IP\u5730\u5740"), portIdx = headers.indexOf("\u7AEF\u53E3");
          const remarkIdx = headers.indexOf("\u56FD\u5BB6") > -1 ? headers.indexOf("\u56FD\u5BB6") : headers.indexOf("\u57CE\u5E02") > -1 ? headers.indexOf("\u57CE\u5E02") : headers.indexOf("\u6570\u636E\u4E2D\u5FC3");
          const tlsIdx = headers.indexOf("TLS");
          dataLines.forEach((line) => {
            const cols = line.split(",").map((c) => c.trim());
            if (tlsIdx !== -1 && cols[tlsIdx]?.toLowerCase() !== "true") return;
            const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
            const ipItem = `${wrappedIP}:${cols[portIdx]}#${cols[remarkIdx]}`;
            if (API\u5907\u6CE8\u540D) {
              const \u5904\u7406\u540EIP = `${ipItem} [${API\u5907\u6CE8\u540D}]`;
              results.add(\u5904\u7406\u540EIP);
            } else {
              results.add(ipItem);
            }
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(`${wrappedIP}:${cols[portIdx]}`);
          });
        } else if (headers.some((h) => h.includes("IP")) && headers.some((h) => h.includes("\u5EF6\u8FDF")) && headers.some((h) => h.includes("\u4E0B\u8F7D\u901F\u5EA6"))) {
          const ipIdx = headers.findIndex((h) => h.includes("IP"));
          const delayIdx = headers.findIndex((h) => h.includes("\u5EF6\u8FDF"));
          const speedIdx = headers.findIndex((h) => h.includes("\u4E0B\u8F7D\u901F\u5EA6"));
          const port = parsedUrl.searchParams.get("port") || \u9ED8\u8BA4\u7AEF\u53E3;
          dataLines.forEach((line) => {
            const cols = line.split(",").map((c) => c.trim());
            const wrappedIP = IPV6_PATTERN.test(cols[ipIdx]) ? `[${cols[ipIdx]}]` : cols[ipIdx];
            const ipItem = `${wrappedIP}:${port}#CF\u4F18\u9009 ${cols[delayIdx]}ms ${cols[speedIdx]}MB/s`;
            if (API\u5907\u6CE8\u540D) {
              const \u5904\u7406\u540EIP = `${ipItem} [${API\u5907\u6CE8\u540D}]`;
              results.add(\u5904\u7406\u540EIP);
            } else {
              results.add(ipItem);
            }
            if (\u4F18\u9009IP\u4F5C\u4E3A\u53CD\u4EE3IP) \u53CD\u4EE3IP\u6C60.add(`${wrappedIP}:${port}`);
          });
        }
      }
    } catch (e) {
    }
  }));
  const LINK\u6570\u7EC4 = \u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9.trim() ? [...new Set(\u8BA2\u9605\u94FE\u63A5\u54CD\u5E94\u7684\u660E\u6587LINK\u5185\u5BB9.split(/\r?\n/).filter((line) => line.trim() !== ""))] : [];
  return [Array.from(results), LINK\u6570\u7EC4, \u9700\u8981\u8BA2\u9605\u8F6C\u6362\u8BA2\u9605URLs, Array.from(\u53CD\u4EE3IP\u6C60)];
}
__name(\u8BF7\u6C42\u4F18\u9009API, "\u8BF7\u6C42\u4F18\u9009API");
async function \u53CD\u4EE3\u53C2\u6570\u83B7\u53D6(url, uuid) {
  const { searchParams } = url;
  const pathname = decodeURIComponent(url.pathname);
  const pathLower = pathname.toLowerCase();
  const \u94FE\u5F0F\u4EE3\u7406\u8DEF\u5F84\u5339\u914D = pathname.match(/\/video\/(.+)$/i);
  if (\u94FE\u5F0F\u4EE3\u7406\u8DEF\u5F84\u5339\u914D) {
    try {
      const \u94FE\u5F0F\u4EE3\u7406\u660E\u6587 = base64SecretDecode(\u94FE\u5F0F\u4EE3\u7406\u8DEF\u5F84\u5339\u914D[1], uuid);
      const { type, ...\u94FE\u5F0F\u4EE3\u7406\u5730\u5740 } = JSON.parse(\u94FE\u5F0F\u4EE3\u7406\u660E\u6587);
      if (!type || !\u53CD\u4EE3\u534F\u8BAE\u9ED8\u8BA4\u7AEF\u53E3[String(type).toLowerCase()]) throw new Error("\u94FE\u5F0F\u4EE3\u7406\u7C7B\u578B\u65E0\u6548");
      if (!\u94FE\u5F0F\u4EE3\u7406\u5730\u5740.hostname || !\u94FE\u5F0F\u4EE3\u7406\u5730\u5740.port) throw new Error("\u94FE\u5F0F\u4EE3\u7406\u5730\u5740\u7F3A\u5C11 hostname \u6216 port");
      \u6211\u7684SOCKS5\u8D26\u53F7 = "";
      \u53CD\u4EE3IP = "\u94FE\u5F0F\u4EE3\u7406";
      \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
      \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = true;
      \u542F\u7528SOCKS5\u53CD\u4EE3 = String(type).toLowerCase();
      parsedSocks5Address = {
        username: \u94FE\u5F0F\u4EE3\u7406\u5730\u5740.username,
        password: \u94FE\u5F0F\u4EE3\u7406\u5730\u5740.password,
        hostname: \u94FE\u5F0F\u4EE3\u7406\u5730\u5740.hostname,
        port: Number(\u94FE\u5F0F\u4EE3\u7406\u5730\u5740.port)
      };
      if (isNaN(parsedSocks5Address.port)) throw new Error("\u94FE\u5F0F\u4EE3\u7406\u7AEF\u53E3\u65E0\u6548");
      return;
    } catch (err) {
      console.error("\u89E3\u6790\u94FE\u5F0F\u4EE3\u7406\u53C2\u6570\u5931\u8D25:", err.message);
    }
  }
  \u6211\u7684SOCKS5\u8D26\u53F7 = searchParams.get("socks5") || searchParams.get("http") || searchParams.get("https") || searchParams.get("turn") || searchParams.get("sstp") || null;
  \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = searchParams.has("globalproxy");
  if (searchParams.get("socks5")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "socks5";
  else if (searchParams.get("http")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "http";
  else if (searchParams.get("https")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "https";
  else if (searchParams.get("turn")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "turn";
  else if (searchParams.get("sstp")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "sstp";
  const \u89E3\u6790\u4EE3\u7406URL = /* @__PURE__ */ __name((\u503C, \u5F3A\u5236\u5168\u5C40 = true) => {
    const \u5339\u914D = /^(socks5|http|https|turn|sstp):\/\/(.+)$/i.exec(\u503C || "");
    if (!\u5339\u914D) return false;
    \u542F\u7528SOCKS5\u53CD\u4EE3 = \u5339\u914D[1].toLowerCase();
    \u6211\u7684SOCKS5\u8D26\u53F7 = \u5339\u914D[2].split("/")[0];
    if (\u5F3A\u5236\u5168\u5C40) \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = true;
    return true;
  }, "\u89E3\u6790\u4EE3\u7406URL");
  const \u8BBE\u7F6E\u53CD\u4EE3IP = /* @__PURE__ */ __name((\u503C) => {
    \u53CD\u4EE3IP = \u503C;
    \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
    \u542F\u7528\u53CD\u4EE3\u515C\u5E95 = false;
  }, "\u8BBE\u7F6E\u53CD\u4EE3IP");
  const \u63D0\u53D6\u8DEF\u5F84\u503C = /* @__PURE__ */ __name((\u503C) => {
    if (!\u503C.includes("://")) {
      const \u659C\u6760\u7D22\u5F152 = \u503C.indexOf("/");
      return \u659C\u6760\u7D22\u5F152 > 0 ? \u503C.slice(0, \u659C\u6760\u7D22\u5F152) : \u503C;
    }
    const \u534F\u8BAE\u62C6\u5206 = \u503C.split("://");
    if (\u534F\u8BAE\u62C6\u5206.length !== 2) return \u503C;
    const \u659C\u6760\u7D22\u5F15 = \u534F\u8BAE\u62C6\u5206[1].indexOf("/");
    return \u659C\u6760\u7D22\u5F15 > 0 ? `${\u534F\u8BAE\u62C6\u5206[0]}://${\u534F\u8BAE\u62C6\u5206[1].slice(0, \u659C\u6760\u7D22\u5F15)}` : \u503C;
  }, "\u63D0\u53D6\u8DEF\u5F84\u503C");
  const \u67E5\u8BE2\u53CD\u4EE3IP = searchParams.get("proxyip");
  if (\u67E5\u8BE2\u53CD\u4EE3IP !== null) {
    if (!\u89E3\u6790\u4EE3\u7406URL(\u67E5\u8BE2\u53CD\u4EE3IP)) return \u8BBE\u7F6E\u53CD\u4EE3IP(\u67E5\u8BE2\u53CD\u4EE3IP);
  } else {
    let \u5339\u914D = /\/(socks5?|http|https|turn|sstp):\/?\/?([^/?#\s]+)/i.exec(pathname);
    if (\u5339\u914D) {
      const \u7C7B\u578B = \u5339\u914D[1].toLowerCase();
      \u542F\u7528SOCKS5\u53CD\u4EE3 = \u7C7B\u578B === "sock" || \u7C7B\u578B === "socks" ? "socks5" : \u7C7B\u578B;
      \u6211\u7684SOCKS5\u8D26\u53F7 = \u5339\u914D[2].split("/")[0];
      \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = true;
    } else if (\u5339\u914D = /\/(g?s5|socks5|g?http|g?https|g?turn|g?sstp)=([^/?#\s]+)/i.exec(pathname)) {
      const \u7C7B\u578B = \u5339\u914D[1].toLowerCase();
      \u6211\u7684SOCKS5\u8D26\u53F7 = \u5339\u914D[2].split("/")[0];
      \u542F\u7528SOCKS5\u53CD\u4EE3 = \u7C7B\u578B.includes("sstp") ? "sstp" : \u7C7B\u578B.includes("turn") ? "turn" : \u7C7B\u578B.includes("https") ? "https" : \u7C7B\u578B.includes("http") ? "http" : "socks5";
      if (\u7C7B\u578B.startsWith("g")) \u542F\u7528SOCKS5\u5168\u5C40\u53CD\u4EE3 = true;
    } else if (\u5339\u914D = /\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/.exec(pathLower)) {
      const \u8DEF\u5F84\u53CD\u4EE3\u503C = \u63D0\u53D6\u8DEF\u5F84\u503C(\u5339\u914D[2]);
      if (!\u89E3\u6790\u4EE3\u7406URL(\u8DEF\u5F84\u53CD\u4EE3\u503C)) return \u8BBE\u7F6E\u53CD\u4EE3IP(\u8DEF\u5F84\u53CD\u4EE3\u503C);
    }
  }
  if (!\u6211\u7684SOCKS5\u8D26\u53F7) {
    \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
    return;
  }
  try {
    parsedSocks5Address = await \u83B7\u53D6SOCKS5\u8D26\u53F7(\u6211\u7684SOCKS5\u8D26\u53F7, \u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3(\u542F\u7528SOCKS5\u53CD\u4EE3));
    if (searchParams.get("socks5")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "socks5";
    else if (searchParams.get("http")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "http";
    else if (searchParams.get("https")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "https";
    else if (searchParams.get("turn")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "turn";
    else if (searchParams.get("sstp")) \u542F\u7528SOCKS5\u53CD\u4EE3 = "sstp";
    else \u542F\u7528SOCKS5\u53CD\u4EE3 = \u542F\u7528SOCKS5\u53CD\u4EE3 || "socks5";
  } catch (err) {
    console.error("\u89E3\u6790SOCKS5\u5730\u5740\u5931\u8D25:", err.message);
    \u542F\u7528SOCKS5\u53CD\u4EE3 = null;
  }
}
__name(\u53CD\u4EE3\u53C2\u6570\u83B7\u53D6, "\u53CD\u4EE3\u53C2\u6570\u83B7\u53D6");
var \u53CD\u4EE3\u534F\u8BAE\u9ED8\u8BA4\u7AEF\u53E3 = { socks5: 1080, http: 80, https: 443, turn: 3478, sstp: 443 };
function \u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3(\u7C7B\u578B) {
  return \u53CD\u4EE3\u534F\u8BAE\u9ED8\u8BA4\u7AEF\u53E3[String(\u7C7B\u578B || "").toLowerCase()] || 80;
}
__name(\u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3, "\u83B7\u53D6\u4EE3\u7406\u9ED8\u8BA4\u7AEF\u53E3");
var SOCKS5\u8D26\u53F7Base64\u6B63\u5219 = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
var IPv6\u65B9\u62EC\u53F7\u6B63\u5219 = /^\[.*\]$/;
function \u83B7\u53D6SOCKS5\u8D26\u53F7(address, \u9ED8\u8BA4\u7AEF\u53E3 = 80) {
  address = String(address || "").trim().replace(/^(socks5|http|https|turn|sstp):\/\//i, "").split("#")[0].trim();
  const firstAt = address.lastIndexOf("@");
  if (firstAt !== -1) {
    let auth = address.slice(0, firstAt).replaceAll("%3D", "=");
    if (!auth.includes(":") && SOCKS5\u8D26\u53F7Base64\u6B63\u5219.test(auth)) auth = atob(auth);
    address = `${auth}@${address.slice(firstAt + 1)}`;
  }
  const atIndex = address.lastIndexOf("@");
  const hostPart = (atIndex === -1 ? address : address.slice(atIndex + 1)).split("/")[0];
  const authPart = atIndex === -1 ? "" : address.slice(0, atIndex);
  const [username, password] = authPart ? authPart.split(":") : [];
  if (authPart && !password) throw new Error('\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u8BA4\u8BC1\u90E8\u5206\u5FC5\u987B\u662F "username:password" \u7684\u5F62\u5F0F');
  let hostname = hostPart, port = \u9ED8\u8BA4\u7AEF\u53E3;
  if (hostPart.includes("]:")) {
    const [ipv6Host, ipv6Port = ""] = hostPart.split("]:");
    hostname = ipv6Host + "]";
    port = Number(ipv6Port.replace(/[^\d]/g, ""));
  } else if (!hostPart.startsWith("[")) {
    const parts = hostPart.split(":");
    if (parts.length === 2) {
      hostname = parts[0];
      port = Number(parts[1].replace(/[^\d]/g, ""));
    }
  }
  if (isNaN(port)) throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1A\u7AEF\u53E3\u53F7\u5FC5\u987B\u662F\u6570\u5B57");
  if (hostname.includes(":") && !IPv6\u65B9\u62EC\u53F7\u6B63\u5219.test(hostname)) throw new Error("\u65E0\u6548\u7684 SOCKS \u5730\u5740\u683C\u5F0F\uFF1AIPv6 \u5730\u5740\u5FC5\u987B\u7528\u65B9\u62EC\u53F7\u62EC\u8D77\u6765\uFF0C\u5982 [2001:db8::1]");
  return { username, password, hostname, port };
}
__name(\u83B7\u53D6SOCKS5\u8D26\u53F7, "\u83B7\u53D6SOCKS5\u8D26\u53F7");
async function getCloudflareUsage(Email, GlobalAPIKey, AccountID, APIToken) {
  const API = "https://api.cloudflare.com/client/v4";
  const sum = /* @__PURE__ */ __name((a) => a?.reduce((t, i) => t + (i?.sum?.requests || 0), 0) || 0, "sum");
  const cfg = { "Content-Type": "application/json" };
  try {
    if (!AccountID && (!Email || !GlobalAPIKey)) return { success: false, pages: 0, workers: 0, total: 0, max: 1e5 };
    if (!AccountID) {
      const r = await fetch(`${API}/accounts`, {
        method: "GET",
        headers: { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey }
      });
      if (!r.ok) throw new Error(`\u8D26\u6237\u83B7\u53D6\u5931\u8D25: ${r.status}`);
      const d = await r.json();
      if (!d?.result?.length) throw new Error("\u672A\u627E\u5230\u8D26\u6237");
      const idx = d.result.findIndex((a) => a.name?.toLowerCase().startsWith(Email.toLowerCase()));
      AccountID = d.result[idx >= 0 ? idx : 0]?.id;
    }
    const now = /* @__PURE__ */ new Date();
    now.setUTCHours(0, 0, 0, 0);
    const hdr = APIToken ? { ...cfg, "Authorization": `Bearer ${APIToken}` } : { ...cfg, "X-AUTH-EMAIL": Email, "X-AUTH-KEY": GlobalAPIKey };
    const res = await fetch(`${API}/graphql`, {
      method: "POST",
      headers: hdr,
      body: JSON.stringify({
        query: `query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
					viewer { accounts(filter: {accountTag: $AccountID}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
						workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
					} }
				}`,
        variables: { AccountID, filter: { datetime_geq: now.toISOString(), datetime_leq: (/* @__PURE__ */ new Date()).toISOString() } }
      })
    });
    if (!res.ok) throw new Error(`\u67E5\u8BE2\u5931\u8D25: ${res.status}`);
    const result = await res.json();
    if (result.errors?.length) throw new Error(result.errors[0].message);
    const acc = result?.data?.viewer?.accounts?.[0];
    if (!acc) throw new Error("\u672A\u627E\u5230\u8D26\u6237\u6570\u636E");
    const pages = sum(acc.pagesFunctionsInvocationsAdaptiveGroups);
    const workers = sum(acc.workersInvocationsAdaptive);
    const total = pages + workers;
    const max = 1e5;
    log(`\u7EDF\u8BA1\u7ED3\u679C - Pages: ${pages}, Workers: ${workers}, \u603B\u8BA1: ${total}, \u4E0A\u9650: 100000`);
    return { success: true, pages, workers, total, max };
  } catch (error) {
    console.error("\u83B7\u53D6\u4F7F\u7528\u91CF\u9519\u8BEF:", error.message);
    return { success: false, pages: 0, workers: 0, total: 0, max: 1e5 };
  }
}
__name(getCloudflareUsage, "getCloudflareUsage");
function sha224(s) {
  const K = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
  const r = /* @__PURE__ */ __name((n, b) => (n >>> b | n << 32 - b) >>> 0, "r");
  s = unescape(encodeURIComponent(s));
  const l = s.length * 8;
  s += String.fromCharCode(128);
  while (s.length * 8 % 512 !== 448) s += String.fromCharCode(0);
  const h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428];
  const hi = Math.floor(l / 4294967296), lo = l & 4294967295;
  s += String.fromCharCode(hi >>> 24 & 255, hi >>> 16 & 255, hi >>> 8 & 255, hi & 255, lo >>> 24 & 255, lo >>> 16 & 255, lo >>> 8 & 255, lo & 255);
  const w = [];
  for (let i = 0; i < s.length; i += 4) w.push(s.charCodeAt(i) << 24 | s.charCodeAt(i + 1) << 16 | s.charCodeAt(i + 2) << 8 | s.charCodeAt(i + 3));
  for (let i = 0; i < w.length; i += 16) {
    const x = new Array(64).fill(0);
    for (let j = 0; j < 16; j++) x[j] = w[i + j];
    for (let j = 16; j < 64; j++) {
      const s0 = r(x[j - 15], 7) ^ r(x[j - 15], 18) ^ x[j - 15] >>> 3;
      const s1 = r(x[j - 2], 17) ^ r(x[j - 2], 19) ^ x[j - 2] >>> 10;
      x[j] = x[j - 16] + s0 + x[j - 7] + s1 >>> 0;
    }
    let [a, b, c, d, e, f, g, h0] = h;
    for (let j = 0; j < 64; j++) {
      const S1 = r(e, 6) ^ r(e, 11) ^ r(e, 25), ch = e & f ^ ~e & g, t1 = h0 + S1 + ch + K[j] + x[j] >>> 0;
      const S0 = r(a, 2) ^ r(a, 13) ^ r(a, 22), maj = a & b ^ a & c ^ b & c, t2 = S0 + maj >>> 0;
      h0 = g;
      g = f;
      f = e;
      e = d + t1 >>> 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 >>> 0;
    }
    for (let j = 0; j < 8; j++) h[j] = h[j] + (j === 0 ? a : j === 1 ? b : j === 2 ? c : j === 3 ? d : j === 4 ? e : j === 5 ? f : j === 6 ? g : h0) >>> 0;
  }
  let hex = "";
  for (let i = 0; i < 7; i++) {
    for (let j = 24; j >= 0; j -= 8) hex += (h[i] >>> j & 255).toString(16).padStart(2, "0");
  }
  return hex;
}
__name(sha224, "sha224");
async function \u89E3\u6790\u5730\u5740\u7AEF\u53E3(proxyIP, \u76EE\u6807\u57DF\u540D = "dash.cloudflare.com", UUID = "00000000-0000-4000-8000-000000000000") {
  if (!\u7F13\u5B58\u53CD\u4EE3IP || !\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4 || \u7F13\u5B58\u53CD\u4EE3IP !== proxyIP) {
    let \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32 = function(str) {
      let \u5730\u5740 = str, \u7AEF\u53E3 = 443;
      if (str.includes("]:")) {
        const parts = str.split("]:");
        \u5730\u5740 = parts[0] + "]";
        \u7AEF\u53E3 = parseInt(parts[1], 10) || \u7AEF\u53E3;
      } else if ((str.match(/:/g) || []).length === 1 && !str.startsWith("[")) {
        const colonIndex = str.lastIndexOf(":");
        \u5730\u5740 = str.slice(0, colonIndex);
        \u7AEF\u53E3 = parseInt(str.slice(colonIndex + 1), 10) || \u7AEF\u53E3;
      }
      return [\u5730\u5740, \u7AEF\u53E3];
    }, \u89E3\u6790TXT\u53CD\u4EE3\u8BB0\u5F55 = function(txtData) {
      return txtData.flatMap((data) => {
        if (data.startsWith('"') && data.endsWith('"')) data = data.slice(1, -1);
        return data.replace(/\\010/g, ",").replace(/\n/g, ",").split(",").map((s) => s.trim()).filter(Boolean);
      }).map((prefix) => \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32(prefix));
    };
    __name(\u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32, "\u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32");
    __name(\u89E3\u6790TXT\u53CD\u4EE3\u8BB0\u5F55, "\u89E3\u6790TXT\u53CD\u4EE3\u8BB0\u5F55");
    proxyIP = proxyIP.toLowerCase();
    const \u53CD\u4EE3IP\u6570\u7EC4 = await \u6574\u7406\u6210\u6570\u7EC4(proxyIP);
    let \u6240\u6709\u53CD\u4EE3\u6570\u7EC4 = [];
    const ipv4Regex = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
    const ipv6Regex = /^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;
    for (const singleProxyIP of \u53CD\u4EE3IP\u6570\u7EC4) {
      let [\u5730\u5740, \u7AEF\u53E3] = \u89E3\u6790\u5730\u5740\u7AEF\u53E3\u5B57\u7B26\u4E32(singleProxyIP);
      if (singleProxyIP.includes(".tp")) {
        const tpMatch = singleProxyIP.match(/\.tp(\d+)/);
        if (tpMatch) \u7AEF\u53E3 = parseInt(tpMatch[1], 10);
      }
      if (ipv4Regex.test(\u5730\u5740) || ipv6Regex.test(\u5730\u5740)) {
        log(`[\u53CD\u4EE3\u89E3\u6790] ${\u5730\u5740} \u4E3AIP\u5730\u5740\uFF0C\u76F4\u63A5\u4F7F\u7528`);
        \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push([\u5730\u5740, \u7AEF\u53E3]);
        continue;
      }
      const [txtRecords, aRecords] = await Promise.all([
        DoH\u67E5\u8BE2(\u5730\u5740, "TXT"),
        DoH\u67E5\u8BE2(\u5730\u5740, "A")
      ]);
      const txtData = txtRecords.filter((r) => r.type === 16).map((r) => r.data);
      const txtAddresses = \u89E3\u6790TXT\u53CD\u4EE3\u8BB0\u5F55(txtData);
      if (txtAddresses.length > 0) {
        log(`[\u53CD\u4EE3\u89E3\u6790] ${\u5730\u5740} \u4F7F\u7528TXT\u8BB0\u5F55\uFF0C\u5171${txtAddresses.length}\u4E2A\u7ED3\u679C`);
        \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push(...txtAddresses);
        continue;
      }
      const ipv4List = aRecords.filter((r) => r.type === 1).map((r) => r.data);
      if (ipv4List.length > 0) {
        log(`[\u53CD\u4EE3\u89E3\u6790] ${\u5730\u5740} \u672A\u83B7\u53D6\u5230TXT\u8BB0\u5F55\uFF0C\u4F7F\u7528A\u8BB0\u5F55\uFF0C\u5171${ipv4List.length}\u4E2A\u7ED3\u679C`);
        \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push(...ipv4List.map((ip) => [ip, \u7AEF\u53E3]));
        continue;
      }
      const aaaaRecords = await DoH\u67E5\u8BE2(\u5730\u5740, "AAAA");
      const ipv6List = aaaaRecords.filter((r) => r.type === 28).map((r) => `[${r.data}]`);
      if (ipv6List.length > 0) {
        log(`[\u53CD\u4EE3\u89E3\u6790] ${\u5730\u5740} \u672A\u83B7\u53D6\u5230TXT\u548CA\u8BB0\u5F55\uFF0C\u4F7F\u7528AAAA\u8BB0\u5F55\uFF0C\u5171${ipv6List.length}\u4E2A\u7ED3\u679C`);
        \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push(...ipv6List.map((ip) => [ip, \u7AEF\u53E3]));
      } else {
        log(`[\u53CD\u4EE3\u89E3\u6790] ${\u5730\u5740} \u672A\u83B7\u53D6\u5230TXT\u3001A\u548CAAAA\u8BB0\u5F55\uFF0C\u4FDD\u7559\u539F\u57DF\u540D`);
        \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.push([\u5730\u5740, \u7AEF\u53E3]);
      }
    }
    const \u6392\u5E8F\u540E\u6570\u7EC4 = \u6240\u6709\u53CD\u4EE3\u6570\u7EC4.sort((a, b) => a[0].localeCompare(b[0]));
    const \u76EE\u6807\u6839\u57DF\u540D = \u76EE\u6807\u57DF\u540D.includes(".") ? \u76EE\u6807\u57DF\u540D.split(".").slice(-2).join(".") : \u76EE\u6807\u57DF\u540D;
    let \u968F\u673A\u79CD\u5B50 = [...\u76EE\u6807\u6839\u57DF\u540D + UUID].reduce((a, c) => a + c.charCodeAt(0), 0);
    log(`[\u53CD\u4EE3\u89E3\u6790] \u968F\u673A\u79CD\u5B50: ${\u968F\u673A\u79CD\u5B50}
\u76EE\u6807\u7AD9\u70B9: ${\u76EE\u6807\u6839\u57DF\u540D}`);
    const \u6D17\u724C\u540E = [...\u6392\u5E8F\u540E\u6570\u7EC4].sort(() => (\u968F\u673A\u79CD\u5B50 = \u968F\u673A\u79CD\u5B50 * 1103515245 + 12345 & 2147483647) / 2147483647 - 0.5);
    \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4 = \u6D17\u724C\u540E.slice(0, 8);
    log(`[\u53CD\u4EE3\u89E3\u6790] \u89E3\u6790\u5B8C\u6210 \u603B\u6570: ${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.length}\u4E2A
${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.map(([ip, port], index) => `${index + 1}. ${ip}:${port}`).join("\n")}`);
    \u7F13\u5B58\u53CD\u4EE3IP = proxyIP;
  } else log(`[\u53CD\u4EE3\u89E3\u6790] \u8BFB\u53D6\u7F13\u5B58 \u603B\u6570: ${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.length}\u4E2A
${\u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4.map(([ip, port], index) => `${index + 1}. ${ip}:${port}`).join("\n")}`);
  return \u7F13\u5B58\u53CD\u4EE3\u89E3\u6790\u6570\u7EC4;
}
__name(\u89E3\u6790\u5730\u5740\u7AEF\u53E3, "\u89E3\u6790\u5730\u5740\u7AEF\u53E3");
async function nginx() {
  return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>

	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>

	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`;
}
__name(nginx, "nginx");
async function html1101(host, \u8BBF\u95EEIP) {
  const now = /* @__PURE__ */ new Date();
  const \u683C\u5F0F\u5316\u65F6\u95F4\u6233 = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0") + " " + String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0") + ":" + String(now.getSeconds()).padStart(2, "0");
  const \u968F\u673A\u5B57\u7B26\u4E32 = Array.from(crypto.getRandomValues(new Uint8Array(8))).map((b) => b.toString(16).padStart(2, "0")).join("");
  return `<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>Worker threw exception | ${host} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/cf.errors.css" />
<!--[if lt IE 9]><link rel="stylesheet" id='cf_styles-ie-css' href="/cdn-cgi/styles/cf.errors.ie.css" /><![endif]-->
<style>body{margin:0;padding:0}</style>


<!--[if gte IE 10]><!-->
<script>
  if (!navigator.cookieEnabled) {
    window.addEventListener('DOMContentLoaded', function () {
      var cookieEl = document.getElementById('cookie-alert');
      cookieEl.style.display = 'block';
    })
  }
<\/script>
<!--<![endif]-->

</head>
<body>
    <div id="cf-wrapper">
        <div class="cf-alert cf-alert-error cf-cookie-error" id="cookie-alert" data-translate="enable_cookies">Please enable cookies.</div>
        <div id="cf-error-details" class="cf-error-details-wrapper">
            <div class="cf-wrapper cf-header cf-error-overview">
                <h1>
                    <span class="cf-error-type" data-translate="error">Error</span>
                    <span class="cf-error-code">1101</span>
                    <small class="heading-ray-id">Ray ID: ${\u968F\u673A\u5B57\u7B26\u4E32} &bull; ${\u683C\u5F0F\u5316\u65F6\u95F4\u6233} UTC</small>
                </h1>
                <h2 class="cf-subheadline" data-translate="error_desc">Worker threw exception</h2>
            </div><!-- /.header -->

            <section></section><!-- spacer -->

            <div class="cf-section cf-wrapper">
                <div class="cf-columns two">
                    <div class="cf-column">
                        <h2 data-translate="what_happened">What happened?</h2>
                            <p>You've requested a page on a website (${host}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=error_100x" target="_blank">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>
                    </div>

                    <div class="cf-column">
                        <h2 data-translate="what_can_i_do">What can I do?</h2>
                            <p><strong>If you are the owner of this website:</strong><br />refer to <a href="https://developers.cloudflare.com/workers/observability/errors/" target="_blank">Workers - Errors and Exceptions</a> and check Workers Logs for ${host}.</p>
                    </div>

                </div>
            </div><!-- /.section -->

            <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold"> ${\u968F\u673A\u5B57\u7B26\u4E32}</strong></span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
      <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span class="hidden" id="cf-footer-ip">${\u8BBF\u95EEIP}</span>
        <span class="cf-footer-separator sm:hidden">&bull;</span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>

    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();<\/script>
  </div><!-- /.error-footer -->

        </div><!-- /#cf-error-details -->
    </div><!-- /#cf-wrapper -->

     <script>
    window._cf_translation = {};


  <\/script>
</body>
</html>`;
}
__name(html1101, "html1101");
export {
  worker_default as default
};
//# sourceMappingURL=_worker.js.map
