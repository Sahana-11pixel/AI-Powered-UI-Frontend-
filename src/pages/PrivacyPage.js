import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Eye, Lock, RefreshCcw, UserMinus, UserCheck, AlertCircle } from 'lucide-react';
import Layout from '../components/Layout';

const PrivacyPage = () => {
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
              <Shield className="w-8 h-8 text-purple-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold theme-text">Privacy Policy</h1>
              <p className="text-sm theme-text-tertiary mt-1">Last updated: April 2026</p>
            </div>
          </div>

          <div className="space-y-10 theme-text-secondary leading-relaxed">
            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">1</span>
                Information We Collect
              </h2>
              <p className="mb-4">We collect only the information necessary to provide our services:</p>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span><strong>Account Data:</strong> Name and email address when you create an account.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span><strong>Uploads:</strong> Screenshots/images you upload for code generation.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">2</span>
                How We Use Your Information
              </h2>
              <p className="mb-4">We use your data to:</p>
              <ul className="space-y-3 ml-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>Provide and improve the UI-CodeGen service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>Generate frontend code from uploaded screenshots (intentionally providing a <strong>similar UI</strong> to respect copyrights and avoid legal issues, rather than an accurate/exact one).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                  <span>Manage your account and authentication.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">3</span>
                Third-Party Services
              </h2>
              <p>
                We use trusted third-party services such as <strong>Firebase</strong> for authentication and storage, and <strong>AI services (such as Gemini API)</strong> for code generation. These services may process your data as part of their functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">4</span>
                Data Security
              </h2>
              <p>
                We take reasonable measures to protect your data using secure technologies. However, no system can be completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">5</span>
                Data Retention
              </h2>
              <p>
                We retain your data only as long as necessary to provide our services. Uploaded images and account data may be deleted when you delete your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">6</span>
                Account Deletion
              </h2>
              <p>
                You can request account deletion at any time. Once deleted, your data will be removed from our systems, subject to technical or legal limitations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">7</span>
                Your Rights
              </h2>
              <p>
                You have the right to access, update, or request deletion of your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">8</span>
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use of the service means you accept those changes.
              </p>
            </section>

            <section className="pt-6 border-t theme-border">
              <h2 className="text-xl font-bold theme-text mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border theme-border">9</span>
                Contact
              </h2>
              <div className="bg-purple-500/5 border theme-border rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm theme-text-secondary">If you have any questions, contact us at:</p>
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

export default PrivacyPage;
