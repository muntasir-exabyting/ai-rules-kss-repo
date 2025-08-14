import { Slide } from '../../types/Slide';

interface KSSSlide extends Slide {
  type: 'text' | 'imageLeft' | 'imageRight' | 'fullBleed';
}

export const kssSlides: KSSSlide[] = [
  // Title Slide - Full bleed for dramatic opening
  {
    type: 'fullBleed',
    title: 'Make AI Tools Behave',
    body: 'Practical Rules for Cursor • Windsurf • Warp • Gemini CLI\n\n60-minute hands-on session\nTransform unpredictable AI into policy-compliant assistants',
    image: {
      src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=entropy',
      alt: 'AI and technology concept with neural networks and code',
      aspect: 'wide'
    }
  },

  // Problem Statement - Image left with frustrated developer
  {
    type: 'imageLeft',
    title: 'The AI Chaos Problem',
    body: 'Sound familiar?\n\n• AI suggests outdated patterns you migrated away from\n• Ignores your team\'s coding standards and conventions\n• Generates code that fails your quality gates\n• Inconsistent behavior across different developers\n\nResult: More time fixing AI output than writing code yourself.',
    image: {
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Frustrated developer looking at messy code on multiple monitors',
      aspect: 'wide'
    }
  },

  // Solution Overview - Text only for focus
  {
    type: 'text',
    title: 'The Solution: Rule Systems',
    body: 'Transform AI from chaotic to compliant with structured rules\n\n✓ Codify team norms and quality standards\n✓ Enforce architectural patterns\n✓ Maintain consistency across all developers\n✓ Reduce review cycles and technical debt\n\nToday we\'ll implement rules for 4 major AI coding tools'
  },

  // Tool Overview - Image right with tools logos concept
  {
    type: 'imageRight',
    title: 'Tools We\'ll Configure',
    body: 'Each tool has different rule syntax:\n\n🎯 **Cursor**: .cursorrules (MDC syntax)\n🌊 **Windsurf**: .windsurfrules (Markdown)\n⚡ **Warp**: Plain text with workarounds\n💎 **Gemini CLI**: GEMINI.md files\n\nSame principles, different implementations.',
    image: {
      src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Collection of modern development tools and code editors',
      aspect: 'square'
    }
  },

  // Cursor Rules - Image left with Cursor interface
  {
    type: 'imageLeft',
    title: 'Cursor: MDC Syntax Rules',
    body: 'Cursor uses .cursorrules files with MDC (Markdown + Components) syntax:\n\n```\n# Project Rules\n- Use TypeScript strict mode\n- Follow React functional patterns\n- No class components\n\n## API Guidelines  \n- Always handle errors with try/catch\n- Use Zod for validation\n```\n\nSupports rich formatting and nested structures.',
    image: {
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Modern code editor with TypeScript and React code displayed',
      aspect: 'wide'
    }
  },

  // Windsurf Rules - Image right with clean markdown
  {
    type: 'imageRight', 
    title: 'Windsurf: Markdown Rules',
    body: 'Windsurf uses .windsurfrules with standard Markdown:\n\n```markdown\n# Code Style\n- 2-space indentation\n- Semicolons required\n- Single quotes for strings\n\n# Architecture\n- Feature-based folder structure\n- Separate API and UI concerns\n```\n\nSimple, readable, version-controllable.',
    image: {
      src: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Clean markdown document with structured content',
      aspect: 'square'
    }
  },

  // Warp Rules - Image left with terminal
  {
    type: 'imageLeft',
    title: 'Warp: Plain Text Workarounds',
    body: 'Warp doesn\'t have native rule files, so we use creative approaches:\n\n• **Project README**: Add "AI Assistant Guidelines" section\n• **Comments in key files**: Embed rule hints\n• **Alias commands**: Create rule-reminder shortcuts\n\nExample: `alias aicheck="echo \'Remember: Use our error handling patterns\'`\n\nNot perfect, but effective for maintaining consistency.',
    image: {
      src: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Modern terminal with colorful command output and development workflow',
      aspect: 'wide'
    }
  },

  // Gemini CLI - Image right with CLI interface
  {
    type: 'imageRight',
    title: 'Gemini CLI: GEMINI.md Files',
    body: 'Gemini CLI reads GEMINI.md files in your project root:\n\n```markdown\n# Development Context\n\n## Tech Stack\n- Next.js 14 with App Router\n- Tailwind CSS for styling\n- Prisma with PostgreSQL\n\n## Rules\n- Always use server actions\n- Implement proper error boundaries\n```\n\nExcellent for providing project context.',
    image: {
      src: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Command line interface with development commands and file structure',
      aspect: 'square'
    }
  },

  // Before/After Demo - Full bleed for impact
  {
    type: 'fullBleed',
    title: 'Live Demo: Before vs After',
    body: 'Watch the transformation in real-time\n\n❌ **Before Rules**: Inconsistent, outdated patterns\n✅ **After Rules**: Clean, compliant, team-standard code\n\nLet\'s see AI behavior change with just a few rule files.',
    image: {
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&crop=entropy',
      alt: 'Split screen showing messy code transforming into clean organized code',
      aspect: 'wide'
    }
  },

  // Global vs Project Rules - Text only for clarity
  {
    type: 'text',
    title: 'Global vs Project-Specific Rules',
    body: 'Structure your rule hierarchy for maximum effectiveness\n\n**Global Rules** (~/.cursor/rules)\n• Code style preferences\n• Security best practices\n• Personal workflow habits\n\n**Project Rules** (.cursorrules in repo)\n• Architecture patterns\n• Tech stack specifics\n• Team conventions\n\n💡 Project rules override global rules'
  },

  // Best Practices - Image left with team collaboration
  {
    type: 'imageLeft',
    title: 'Rule Writing Best Practices',
    body: '**Be Specific**: "Use functional components" not "write good React"\n\n**Provide Examples**: Show the exact pattern you want\n\n**Explain Why**: Context helps AI make better decisions\n\n**Start Small**: Add rules incrementally as issues arise\n\n**Version Control**: Rules are code—track changes\n\n**Team Alignment**: Review rules like any other code',
    image: {
      src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Team of developers collaborating on code standards and best practices',
      aspect: 'wide'
    }
  },

  // Common Patterns - Image right with code patterns
  {
    type: 'imageRight',
    title: 'Copy-Paste Starter Templates',
    body: 'Ready-to-use rule templates for common scenarios:\n\n🏗️ **Architecture Rules**\n- Folder structure enforcement\n- Import/export patterns\n- Component organization\n\n🔒 **Security Rules**\n- API key handling\n- Input validation requirements\n- Authentication patterns\n\n📏 **Code Style Rules**\n- Formatting preferences\n- Naming conventions\n- Comment standards',
    image: {
      src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Code templates and patterns displayed on screen with copy-paste icons',
      aspect: 'square'
    }
  },

  // Quality Gates - Image left with CI/CD pipeline
  {
    type: 'imageLeft',
    title: 'Integrating with Quality Gates',
    body: 'Make rules part of your development pipeline:\n\n**Pre-commit Hooks**\n• Validate rule compliance\n• Block non-compliant commits\n\n**CI/CD Integration**\n• Automated rule checking\n• Generate compliance reports\n\n**Code Review Process**\n• Rule violation flagging\n• Automated suggestions\n\n**Metrics & Monitoring**\n• Track rule adoption\n• Measure code quality improvements',
    image: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop&crop=entropy',
      alt: 'CI/CD pipeline dashboard with quality gates and automated testing workflows',
      aspect: 'wide'
    }
  },

  // Real-world Examples - Text only for focus
  {
    type: 'text',
    title: 'Real-World Success Stories',
    body: '📈 **Startup Team (8 devs)**\n• 60% reduction in code review cycles\n• Consistent API patterns across all features\n• New developers onboard 3x faster\n\n🏢 **Enterprise Team (50+ devs)**\n• Eliminated legacy pattern usage\n• Automated security compliance\n• Reduced technical debt by 40%\n\n🚀 **Agency (Multiple projects)**\n• Standardized across client codebases\n• Faster project delivery\n• Higher client satisfaction scores'
  },

  // Common Pitfalls - Image right with warning concept
  {
    type: 'imageRight',
    title: 'Avoid These Common Pitfalls',
    body: '⚠️ **Too Many Rules at Once**\nStart with 3-5 critical rules, expand gradually\n\n⚠️ **Vague Instructions**\n"Write clean code" → "Use TypeScript interfaces for all API responses"\n\n⚠️ **No Context**\nExplain WHY a rule exists, not just WHAT to do\n\n⚠️ **Set and Forget**\nRules need maintenance as your codebase evolves\n\n⚠️ **Team Misalignment**\nRules should reflect team consensus, not individual preferences',
    image: {
      src: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Warning signs and caution symbols representing common development pitfalls',
      aspect: 'square'
    }
  },

  // Hands-on Workshop - Full bleed for engagement
  {
    type: 'fullBleed',
    title: 'Hands-On Workshop Time',
    body: 'Let\'s build your first rule set together\n\n🛠️ **Choose your tool** (Cursor, Windsurf, Warp, or Gemini)\n📝 **Identify 3 pain points** in your current workflow\n✍️ **Write specific rules** to address them\n🧪 **Test with AI** and refine\n\nNext 15 minutes: Create your first .cursorrules file',
    image: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=entropy',
      alt: 'Hands-on workshop with developers working on laptops and collaborating',
      aspect: 'wide'
    }
  },

  // Next Steps - Image left with roadmap
  {
    type: 'imageLeft',
    title: 'Your 30-Day Rule Implementation Plan',
    body: '**Week 1**: Start with Global Rules\n• Set up basic code style preferences\n• Add security baseline rules\n\n**Week 2**: Project-Specific Rules\n• Document current project patterns\n• Create architecture enforcement rules\n\n**Week 3**: Team Adoption\n• Share rules with team\n• Gather feedback and refine\n\n**Week 4**: Automation & Integration\n• Add to CI/CD pipeline\n• Set up compliance monitoring',
    image: {
      src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Project roadmap and timeline with checkboxes and milestone markers',
      aspect: 'wide'
    }
  },

  // Resources - Image right with documentation
  {
    type: 'imageRight',
    title: 'Resources & Community',
    body: '📚 **Documentation & Examples**\n• github.com/ai-rules-examples\n• Tool-specific rule repositories\n• Community-contributed patterns\n\n💬 **Community Support**\n• Discord: AI Rules Community\n• Reddit: r/AIAssistants\n• Stack Overflow: ai-rules tag\n\n🎯 **Advanced Topics**\n• Dynamic rule generation\n• Context-aware rule switching\n• Rule analytics and optimization',
    image: {
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Open books, documentation, and learning resources spread on a desk',
      aspect: 'square'
    }
  },

  // Closing - Full bleed for strong finish
  {
    type: 'fullBleed',
    title: 'Transform Your AI Workflow Today',
    body: 'From chaos to compliance in just a few rule files\n\n✅ **Immediate Impact**: Start seeing consistent AI output today\n✅ **Team Benefits**: Align everyone to the same standards\n✅ **Long-term Value**: Build institutional knowledge\n\nStop fighting your AI tools—make them work for you\n\n🚀 **Your turn**: Implement your first rule file this week!',
    image: {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop&crop=entropy',
      alt: 'Success and transformation concept with upward trending graphs and positive technology imagery',
      aspect: 'wide'
    }
  }
];

export default kssSlides;
