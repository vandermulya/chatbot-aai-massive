<script>
  window.watsonAssistantChatOptions = {
    integrationID: "cbfc454d-c4e9-446f-a88a-1916f23299c5", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "3831093b-4caa-40b1-967f-910ce3e972c8", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
</script>