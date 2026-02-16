"use client";

import { useState, useMemo } from "react";
import {
  companyConfig,
  jobs,
  getUniqueAreas,
  getUniqueStates,
  locationTypeLabels,
  jobTypeLabels,
} from "@/data/mock";

export default function CareerPage() {
  const [search, setSearch] = useState("");
  const [locationType, setLocationType] = useState("");
  const [jobType, setJobType] = useState("");
  const [area, setArea] = useState("");
  const [state, setState] = useState("");

  const areas = useMemo(() => getUniqueAreas(jobs), []);
  const states = useMemo(() => getUniqueStates(jobs), []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.area.toLowerCase().includes(search.toLowerCase());
      const matchLocationType = !locationType || job.locationType === locationType;
      const matchJobType = !jobType || job.type === jobType;
      const matchArea = !area || job.area === area;
      const matchState = !state || job.location.includes(state);

      return matchSearch && matchLocationType && matchJobType && matchArea && matchState;
    });
  }, [search, locationType, jobType, area, state]);

  const clearFilters = () => {
    setSearch("");
    setLocationType("");
    setJobType("");
    setArea("");
    setState("");
  };

  const hasActiveFilters = search || locationType || jobType || area || state;
  const { colors } = companyConfig;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner + Logo */}
      <header className="relative">
        {/* Cover Image */}
        <div
          className="h-56 md:h-72 lg:h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url('${companyConfig.coverImage}')`,
          }}
        />
        
        {/* Logo sobreposto */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 sm:-mt-20">
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl shadow-xl flex items-center justify-center border border-white bg-white overflow-hidden"
            >
              {companyConfig.logo ? (
                <img 
                  src={companyConfig.logo} 
                  alt={`Logo ${companyConfig.name}`}
                  className="w-full h-full object-contain p-0.5"
                />
              ) : (
                <span className="text-4xl sm:text-5xl font-bold" style={{ color: colors.secondary }}>
                  {companyConfig.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Programa para pessoas com deficiência + Nome da empresa */}
        <div className="mb-2">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: `${colors.secondary}25`, color: colors.primary }}
          >
            Vagas para pessoas com deficiência
          </span>
        </div>
        <h1 
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{ color: colors.primary }}
        >
          {companyConfig.name}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {companyConfig.subtitle}
        </p>

        {/* Tagline e Descrição */}
        <section className="mb-10">
          <h2
            className="text-lg sm:text-xl font-semibold mb-4"
            style={{ color: colors.primary }}
          >
            {companyConfig.tagline}
          </h2>
          <div className="space-y-4">
            {companyConfig.description.split("\n\n").map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: paragraph.replace(/\*\*(.*?)\*\*/g, `<strong style="color: ${colors.primary}">$1</strong>`)
                }}
              />
            ))}
          </div>
          
          {/* Imagens representativas */}
          {companyConfig.gallery && companyConfig.gallery.length > 0 && (
            <div className="grid grid-cols-3 gap-3 mt-6">
              {companyConfig.gallery.slice(0, 3).map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-[4/3] rounded-lg overflow-hidden"
                >
                  <img
                    src={image.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Vídeos Institucionais */}
        {companyConfig.videos && companyConfig.videos.length > 0 && (
          <section className="mb-10">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {companyConfig.videos.length === 1 ? "Nosso vídeo institucional" : "Conheça mais sobre nós"}
            </h3>
            <div className={`grid gap-6 ${companyConfig.videos.length === 1 ? "max-w-2xl" : "md:grid-cols-2"}`}>
              {companyConfig.videos.map((video, index) => (
                <div key={index}>
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{video.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links Sociais */}
        <section className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Conheça ainda mais sobre nós
          </h3>
          <div className="flex flex-wrap gap-3">
            {companyConfig.website && (
              <a
                href={companyConfig.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Website
              </a>
            )}
            {companyConfig.linkedin && (
              <a
                href={companyConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            )}
            {companyConfig.instagram && (
              <a
                href={companyConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </a>
            )}
            {companyConfig.youtube && (
              <a
                href={companyConfig.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            )}
          </div>
        </section>

        {/* Seção de Vagas */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3
              className="text-xl font-semibold"
              style={{ color: colors.primary }}
            >
              Vagas para pessoas com deficiência
            </h3>
          </div>

          {/* Busca */}
          <div className="mb-4">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar vagas"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 placeholder-gray-400"
                style={{ 
                  "--tw-ring-color": colors.secondary,
                } as React.CSSProperties}
              />
            </div>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="filter-location-type" className="block text-xs font-medium text-gray-500 mb-1.5">
                  Modelo de trabalho
                </label>
                <select
                  id="filter-location-type"
                  value={locationType}
                  onChange={(e) => setLocationType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white text-gray-700"
                  style={{ 
                    "--tw-ring-color": colors.secondary,
                  } as React.CSSProperties}
                >
                  <option value="">Todos</option>
                  {Object.entries(locationTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="filter-job-type" className="block text-xs font-medium text-gray-500 mb-1.5">
                  Tipo de vaga
                </label>
                <select
                  id="filter-job-type"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white text-gray-700"
                  style={{ 
                    "--tw-ring-color": colors.secondary,
                  } as React.CSSProperties}
                >
                  <option value="">Todos</option>
                  {Object.entries(jobTypeLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="filter-area" className="block text-xs font-medium text-gray-500 mb-1.5">
                  Área
                </label>
                <select
                  id="filter-area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white text-gray-700"
                  style={{ 
                    "--tw-ring-color": colors.secondary,
                  } as React.CSSProperties}
                >
                  <option value="">Todas</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="filter-state" className="block text-xs font-medium text-gray-500 mb-1.5">
                  Estado
                </label>
                <select
                  id="filter-state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent bg-white text-gray-700"
                  style={{ 
                    "--tw-ring-color": colors.secondary,
                  } as React.CSSProperties}
                >
                  <option value="">Todos</option>
                  {states.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-3 text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Limpar filtros
              </button>
            )}
          </div>

          {/* Contador */}
          <p className="text-sm text-gray-500 mb-4">
            {filteredJobs.length} {filteredJobs.length === 1 ? "vaga encontrada" : "vagas encontradas"}
          </p>

          {/* Lista de vagas */}
          <div className="space-y-3">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <svg
                  className="w-12 h-12 mx-auto text-gray-300 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <p className="text-gray-500">Nenhuma vaga encontrada com os filtros selecionados.</p>
                <button
                  onClick={clearFilters}
                  className="mt-2 text-sm underline"
                  style={{ color: colors.secondary }}
                >
                  Limpar filtros
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <a
                  key={job.id}
                  href={`/jobs/${job.id}`}
                  className="block bg-white rounded-lg border border-gray-200 p-4 sm:p-5 hover:shadow-md hover:border-gray-300 transition-all group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4
                        className="font-semibold text-gray-900 group-hover:underline truncate text-lg"
                      >
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {job.area}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{
                          backgroundColor: `${colors.secondary}15`,
                          color: colors.primary,
                        }}
                      >
                        {jobTypeLabels[job.type]}
                      </span>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>

          {/* Banco de Talentos */}
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200 text-center shadow-sm">
            <p className="text-gray-600 mb-4">
              Não encontrou a vaga que procura?{" "}
              <strong className="text-gray-900">Cadastre-se no banco de talentos do Super Inclusão!</strong>
            </p>
            <button
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: colors.primary }}
            >
              Quero fazer parte do Super Inclusão
            </button>
          </div>
        </section>
      </main>

      {/* Super Inclusão - Programa para pessoas com deficiência */}
      {companyConfig.institute && (
        <section className="mt-16">
          {/* Banner Principal com Imagem de Fundo */}
          <div 
            className="relative min-h-[500px] flex items-center"
            style={{
              backgroundImage: `url('${companyConfig.institute.images[0]}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${colors.primary}ee 0%, ${colors.primary}cc 100%)`,
              }}
            />
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <span 
                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white"
                style={{ backgroundColor: colors.secondary }}
              >
                Programa para pessoas com deficiência
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {companyConfig.institute.name}
              </h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-6 max-w-2xl">
                {companyConfig.institute.tagline}
              </p>
              <p className="text-white/70 leading-relaxed max-w-2xl mb-8">
                {companyConfig.institute.description}
              </p>
              <a
                href={companyConfig.institute.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg text-white transition-all hover:scale-105"
                style={{ backgroundColor: colors.secondary }}
              >
                Conhecer a Superlógica
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Grid de Imagens com Estatísticas Sobrepostas */}
          <div className="grid md:grid-cols-4">
            {companyConfig.institute?.stats.map((stat, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden group"
              >
                <img
                  src={companyConfig.institute?.images[index] || companyConfig.institute?.images[0] || ''}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
                  style={{ backgroundColor: `${colors.primary}dd` }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-white text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Programas */}
          <div 
            className="py-16"
            style={{ backgroundColor: colors.light }}
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4 text-center"
                style={{ color: colors.primary }}
              >
                Como funciona o Super Inclusão
              </h3>
              <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Três pilares para sua jornada conosco
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {companyConfig.institute.programs.map((program, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: `${colors.primary}12` }}
                    >
                      <svg 
                        className="w-7 h-7" 
                        style={{ color: colors.primary }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 
                      className="font-bold text-xl mb-2"
                      style={{ color: colors.primary }}
                    >
                      {program.name}
                    </h4>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      {program.age}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} {companyConfig.name}. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
