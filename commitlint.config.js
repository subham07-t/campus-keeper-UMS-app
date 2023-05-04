module.exports = {
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["Feat", "Fix", "Test", "Build", "Docs", "Perf", "Global"],
    ],
    "scope-enum": [2, "always", ["FE", "BE"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          Feat: {
            description: "A new feature",
            title: "Features",
            emoji: "✨",
          },
          Fix: {
            description: "A bug fix",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          Test: {
            description: "Testing related changes",
            title: "Tests",
            emoji: "🚨",
          },
          Build: {
            description:
              "Changes that affect the build system or external dependencies (example scopes: vercel, npm)",
            title: "Builds",
            emoji: "🛠",
          },
          Docs: {
            description: "Documentation related changes",
            title: "Documentation",
            emoji: "📚",
          },
          Perf: {
            description: "A code change that improves performance",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          Global: {
            description: "When changes affect the root codebase",
            title: "Global changes",
            emoji: "🌎",
          },
        },
      },
      scope: {
        description:
          "What is the scope of this change (e.g. Frontend or Backend)",
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
    },
  },
};
