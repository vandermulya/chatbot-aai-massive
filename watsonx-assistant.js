<script>
  window.watsonAssistantChatOptions = {
    integrationID: "YOUR-INTEGRATION-ID", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "YOUR-SERVICE-INSTANCE-ID", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>
