import { useState } from 'react';
import { Leaf, Droplet, Wind, Recycle, TreePine, Globe } from 'lucide-react';
import { Hero } from './components/Hero';
import { EnvironmentalIssue } from './components/EnvironmentalIssue';
import { ActionCard } from './components/ActionCard';
export default function App() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const content = {
    id: {
      hero: {
        title: 'mainjudul',
        subtitle: 'submainjudul',
        cta: 'pencet bwt kbh, nnti dicode, lg males'
      },
      issues: {
        title: 'Tantangan Lingkungan',
        items: [
          {
            title: 'Tema Kita Yg Ke 1',
            description: 'isi dari tema yg ke 1',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: TreePine
          },
          {
            title: 'tema ke 2',
            description: 'isi tema 2',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: Droplet
          },
          {
            title: 'tema ke 3',
            description: 'isi tema ke 3',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: Wind
          }
        ]
      },
      actions: {
        title: 'juduljudul ( apa yg bisa kita perbuat kayaknya )',
        subtitle: 'blablabla',
        items: [
          {
            icon: Recycle,
            title: 'jdul1',
            description: 'isi'
          },
          {
            icon: Leaf,
            title: 'jdul2',
            description: 'isi'
          },
          {
            icon: TreePine,
            title: 'jdul3',
            description: 'isi'
          },
          {
            icon: Droplet,
            title: 'jdul4',
            description: 'isi'
          },
          {
            icon: Globe,
            title: 'jdul5',
            description: 'isi'
          },
          {
            icon: Wind,
            title: 'jdul6',
            description: 'isi'
          }
        ]
      },
      footer: 'slogan'
    },
    en: {
      hero: {
        title: 'Save Our Ecosystem',
        subtitle: 'yayaya.',
        cta: 'yayaya'
      },
      issues: {
        title: 'Environmental Challenges',
        items: [
          {
            title: 'Tema Kita Yg Ke 1',
            description: 'isi dari tema yg ke 1',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: TreePine
          },
          {
            title: 'tema ke 2',
            description: 'isi tema 2',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: Droplet
          },
          {
            title: 'tema ke 3',
            description: 'isi tema ke 3',
            image: 'https://i.ibb.co.com/kV9MsL7f/Screenshot-2025-11-27-172939.png',
            icon: Wind
          }
        ]
      },
      actions: {
        title: 'juduljudul',
        subtitle: 'blablabla',
        items: [
          {
            icon: Recycle,
            title: 'jdul1',
            description: 'isi'
          },
          {
            icon: Leaf,
            title: 'jdul2',
            description: 'isi'
          },
          {
            icon: TreePine,
            title: 'jdul3',
            description: 'isi'
          },
          {
            icon: Droplet,
            title: 'jdul4',
            description: 'isi'
          },
          {
            icon: Globe,
            title: 'jdul5',
            description: 'isi'
          },
          {
            icon: Wind,
            title: 'jdul6',
            description: 'isi'
          }
        ]
      },
      footer: 'slogan b ing'
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white rounded-full shadow-lg p-1 flex gap-1">
          <button
            onClick={() => setLanguage('id')}
            className={`px-4 py-2 rounded-full transition-all ${
              language === 'id'
                ? 'bg-emerald-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            ID
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-2 rounded-full transition-all ${
              language === 'en'
                ? 'bg-emerald-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            EN
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title={currentContent.hero.title}
        subtitle={currentContent.hero.subtitle}
        ctaText={currentContent.hero.cta}
      />

      {/* Environmental Issues */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-16 text-emerald-900">
            {currentContent.issues.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {currentContent.issues.items.map((issue, index) => (
              <EnvironmentalIssue
                key={index}
                title={issue.title}
                description={issue.description}
                image={issue.image}
                icon={issue.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-20 px-4 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">{currentContent.actions.title}</h2>
            <p className="text-emerald-100 text-xl">
              {currentContent.actions.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentContent.actions.items.map((action, index) => (
              <ActionCard
                key={index}
                icon={action.icon}
                title={action.title}
                description={action.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-emerald-950 text-emerald-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <Leaf className="inline-block w-12 h-12 text-emerald-400" />
          </div>
          <p className="text-lg mb-4">{currentContent.footer}</p>
          <p className="text-emerald-400 text-sm">
            © 2026 Lie Kiat Lijadi
          </p>
        </div>
      </footer>
    </div>
  );
}
