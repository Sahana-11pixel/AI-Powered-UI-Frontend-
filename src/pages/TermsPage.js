import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ShieldAlert, Cpu, UserCheck, AlertTriangle, RefreshCcw } from 'lucide-react';
import Layout from '../components/Layout';

const TermsPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-12 text-sm sm:text-base">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="theme-bg-card border theme-border rounded-2xl p-6 sm:p-10 theme-shadow theme-transition"
        >
          <div className="flex items-center gap-4 mb-10 pb-6 border-b theme-border">
            <div className="p-3 bg-purple-500/10 rounded-2xl border theme-border">
              <FileText className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold theme-text">Terms of Service</h1>
              <p className="text-sm theme-text-tertiary mt-1">Last updated: April 2024</p>
            </div>
          </div>

          <div className="space-y-10 theme-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">1</span>
                Use of the Service
              </h2>
              <p className="mb-4">By using UI-CodeGen, you agree to the following:</p>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>You will only upload designs or content that you have the legal right to use.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>You are responsible for any content you upload and any code generated from it.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">2</span>
                AI-Generated Code
              </h2>
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-5 mb-4">
                <p className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    UI-CodeGen uses AI to generate frontend code. <strong>Please note:</strong> to respect intellectual property and prevent potential legal or copyright issues, our system is intentionally designed to provide a <strong>similar UI</strong> based on your screenshot, rather than an accurate or exact 1:1 replica. <strong>You are responsible for reviewing and testing all generated code before use.</strong>
                  </span>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">3</span>
                Account Responsibility
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account. Any misuse of the platform, including harmful, illegal, or abusive activity, may result in suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">4</span>
                Limitation of Liability
              </h2>
              <p>
                UI-CodeGen is not responsible for any damages, losses, or issues resulting from the use of generated code or uploaded content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">5</span>
                Changes to the Service
              </h2>
              <p>
                We may update or modify the service at any time without prior notice.
              </p>
            </section>

            <section className="pt-6 border-t theme-border">
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">6</span>
                Support
              </h2>
              <div className="bg-purple-500/5 border theme-border rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm theme-text-secondary">If you have any questions or issues, you can contact us at:</p>
                  <a href="mailto:uicodegensupport@gmail.com" className="text-purple-400 font-bold hover:underline">uicodegensupport@gmail.com</a>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default TermsPage;
