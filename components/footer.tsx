import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-xl font-bold text-white">Edgar</span>
            </div>
            <p className="text-sm">
              Rendons les plantes accessibles à tous
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Produit</h3>
            <ul className="space-y-2 text-sm">
              <li>Caractéristiques</li>
              <li>Application</li>
              <li>Tarifs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm">
              <li>À propos</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>Conditions d&apos;utilisation</li>
              <li>Politique de confidentialité</li>
              <li>Mentions légales</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} Edgar. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}