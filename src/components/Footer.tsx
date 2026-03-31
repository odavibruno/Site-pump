import { Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import logo from '@/assets/branca.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="Pump Sites" 
                className="h-14 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-text-secondary max-w-sm mb-6">
              Desenvolvemos sites e aplicações que alcançam milhares de usuários.
              Transformamos ideias em produtos digitais de alta performance.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-3 glass-tech rounded-xl hover:glass-tech-hover hover:text-accent-yellow transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-tech rounded-xl hover:glass-tech-hover hover:text-accent-yellow transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-tech rounded-xl hover:glass-tech-hover hover:text-accent-yellow transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="p-3 glass-tech rounded-xl hover:glass-tech-hover hover:text-accent-yellow transition-all"
                aria-label="Github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-text-primary">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-text-secondary hover:text-accent-yellow transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-secondary hover:text-accent-yellow transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-accent-yellow transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-accent-yellow transition-colors">
                  Portfólio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-text-primary">Contato</h4>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <a href="mailto:contato@pumpsites.com.br" className="hover:text-accent-yellow transition-colors">
                  contato@pumpsites.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511999999999" className="hover:text-accent-yellow transition-colors">
                  +55 (11) 9999-9999
                </a>
              </li>
              <li className="text-text-dim">
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-dim text-sm">
            © {currentYear} Pump Sites. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-text-dim hover:text-text-secondary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-text-dim hover:text-text-secondary transition-colors">
              Termos
            </a>
            <a href="#" className="text-text-dim hover:text-text-secondary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
