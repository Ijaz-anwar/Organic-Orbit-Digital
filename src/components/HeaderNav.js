'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Mail } from 'lucide-react';
import Logo from './Logo';
import LanguageTranslator from './LanguageTranslator';
import { mainNav, siteConfig, mailtoHref } from '@/lib/site-config';
import { services, servicePath, accentStyles } from '@/lib/services';

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href);
}

export default function HeaderNav() {
  const pathname = usePathname() || '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(72);
  const rowRef = useRef(null);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const hoverTimer = useRef(null);

  const toggleMobileMenu = () => {
    if (!menuOpen && rowRef.current) {
      setMenuTop(Math.max(0, Math.round(rowRef.current.getBoundingClientRect().bottom)));
    }
    setMenuOpen((v) => !v);
  };

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => {
      document.body.style.overflow = original;
      mq.removeEventListener('change', onChange);
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key !== 'Escape') return;
      if (servicesOpen) {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
      if (menuOpen) {
        setMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [servicesOpen, menuOpen]);

  useEffect(() => {
    if (!servicesOpen) return undefined;
    function onPointer(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setServicesOpen(false);
    }
    document.addEventListener('pointerdown', onPointer);
    return () => document.removeEventListener('pointerdown', onPointer);
  }, [servicesOpen]);

  const onDropdownBlur = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) {
      setServicesOpen(false);
    }
  }, []);

  const openOnHover = () => {
    clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };
  const closeOnLeave = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <>
      <div ref={rowRef} className="container-site relative z-50 flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-lg"
          aria-label={`${siteConfig.name} — home`}
        >
          <Logo tone="dark" idPrefix="hdr" />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.hasDropdown ? (
                <li
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openOnHover}
                  onMouseLeave={closeOnLeave}
                  onBlur={onDropdownBlur}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive(pathname, item.href) ? 'text-orbit-600' : 'text-slate-700 hover:text-orbit-600'
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id="services-menu"
                    hidden={!servicesOpen}
                    className="absolute top-full left-1/2 w-[min(54rem,calc(100vw-3rem))] -translate-x-1/2 pt-3"
                  >
                    <div className="grid grid-cols-[1fr_15.5rem] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_48px_-16px_rgb(16_23_42/0.16)]">
                      <ul className="grid grid-cols-2 gap-1 p-3">
                        {services.map((s) => {
                          const Icon = s.icon;
                          const a = accentStyles[s.accent] ?? accentStyles.blue;
                          return (
                            <li key={s.slug}>
                              <Link
                                href={servicePath(s.slug)}
                                className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-mist focus-visible:bg-mist"
                              >
                                <span className={`mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg ring-1 ${a.iconBg}`}>
                                  <Icon className="h-5 w-5" aria-hidden="true" />
                                </span>
                                <span>
                                  <span className="block font-semibold text-ink group-hover:text-orbit-600">
                                    <span className="mr-1.5 font-display text-xs font-bold text-orbit-600">{s.number}.</span>
                                    {s.navLabel}
                                  </span>
                                  <span className="block text-xs text-muted">{s.navHint}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="flex flex-col justify-between border-l border-line bg-mist p-6 text-ink">
                        <div>
                          <p className="font-display text-lg font-semibold text-ink">Not sure where to start?</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            See how all six services connect, or tell us about your goals and we will suggest a starting point.
                          </p>
                        </div>
                        <div className="mt-6 flex flex-col gap-3">
                          <Link href="/services/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-orbit-600 hover:text-orbit-700">
                            View all 6 services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                          <Link href="/contact/" className="btn btn-primary min-h-10 px-4 py-2 text-xs">
                            Talk to our team <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={`relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                      isActive(pathname, item.href) ? 'text-orbit-600' : 'text-slate-700 hover:text-orbit-600'
                    }`}
                  >
                    {item.label}
                    {isActive(pathname, item.href) && (
                      <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-orbit-500" aria-hidden="true" />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <LanguageTranslator mountWidget />
          <Link href="/contact/" className="btn btn-primary hidden min-h-11 px-5 text-sm sm:inline-flex">
            Get a Free Consultation
          </Link>
          <button
            ref={mobileToggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-mist lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={toggleMobileMenu}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation (Light theme) */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        style={{ top: `${menuTop}px` }}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex min-h-full flex-col py-6">
          <ul className="flex flex-col">
            {mainNav
              .filter((i) => !i.hasDropdown)
              .map((item) => (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className={`flex items-center justify-between py-4 font-display text-xl font-semibold ${
                      isActive(pathname, item.href) ? 'text-orbit-600' : 'text-ink'
                    }`}
                  >
                    {item.label}
                    <ArrowRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
                  </Link>
                </li>
              ))}
          </ul>

          <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-muted uppercase">Services (01 – 06)</p>
          <ul className="mt-3 grid gap-2">
            <li>
              <Link href="/services/" className="flex items-center gap-3 rounded-xl border border-line bg-mist p-3 text-ink hover:border-orbit-300">
                <span className="font-semibold">All services overview</span>
              </Link>
            </li>
            {services.map((s) => {
              const Icon = s.icon;
              const a = accentStyles[s.accent] ?? accentStyles.blue;
              return (
                <li key={s.slug}>
                  <Link
                    href={servicePath(s.slug)}
                    aria-current={pathname === servicePath(s.slug) ? 'page' : undefined}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white p-3 text-slate-800 hover:border-orbit-300 hover:bg-mist"
                  >
                    <span className={`grid h-9 w-9 place-items-center rounded-lg ring-1 ${a.iconBg}`}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="font-medium">
                      <span className="mr-1.5 font-display text-xs font-bold text-orbit-600">{s.number}.</span>
                      {s.navLabel}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <LanguageTranslator variant="mobile" />

          <div className="mt-auto flex flex-col gap-3 pt-8">
            <Link href="/contact/" className="btn btn-primary w-full">
              Get a Free Consultation
            </Link>
            <a href={mailtoHref} className="btn btn-outline w-full">
              <Mail className="h-4 w-4" aria-hidden="true" /> {siteConfig.email}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
