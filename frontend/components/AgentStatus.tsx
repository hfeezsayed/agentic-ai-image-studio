export default function AgentStatus() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Agent Workflow</h2>

      <div className="space-y-3">
        <div className="border rounded-lg p-4">
          🧠 Prompt Engineer Agent
          <p className="text-sm text-gray-500">Enhances user prompts</p>
        </div>

        <div className="border rounded-lg p-4">
          🎨 Style Expert Agent
          <p className="text-sm text-gray-500">Selects visual style</p>
        </div>

        <div className="border rounded-lg p-4">
          🖼️ Image Generator Agent
          <p className="text-sm text-gray-500">Creates final image prompt</p>
        </div>
      </div>
    </div>
  );
}
