'use client'

import React from 'react'
import Image from 'next/image'
import { blogPosts, BlogPost } from '../data/blog-posts'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 头部区域 */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/IMG_4430.PNG"
            alt="个人头像"
            fill
            className="rounded-full object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">东方延绪</h1>
        <p className="text-xl text-gray-600 mb-8">大三学生 / 技术爱好者</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/zqqcbh" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://blog.csdn.net/2203_75380029?type=blog" className="text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
            </svg>
          </a>
        </div>
      </header>

      {/* 关于我 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">关于我</h2>
        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          <p className="mb-4">
            我是一名大三学生，热爱技术和音乐。在技术方面，我专注于前端开发和新技术的学习，
            喜欢探索技术前沿，关注最新的开发趋势和工具。
          </p>
          <p className="mb-4">
            在音乐方面，我是林肯公园的忠实粉丝，热爱摇滚音乐。音乐不仅是我放松的方式，
            也给我带来了很多创作灵感。
          </p>
          <p>
            我相信技术改变世界，希望通过分享知识来帮助更多的人。在这里，我会分享我的技术学习心得、
            项目经验，以及一些有趣的技术发现。
          </p>
        </div>
      </section>

      {/* 技能展示 */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">技术栈</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Java', icon: '☕' },
            { name: 'Python', icon: '🐍' },
            { name: 'Django', icon: '🎸' },
            { name: 'Spring', icon: '🌱' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'Vue3', icon: '⚡' }
          ].map((skill) => (
            <div key={skill.name} className="text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-2">{skill.icon}</div>
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 最新博客 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">最新博客</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post: BlogPost) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <Link 
                  href={`/blog/${post.id}`}
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center"
                >
                  阅读更多
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">联系我</h2>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            如果您有任何问题或合作意向，欢迎随时联系我
          </p>
          <a
            href="mailto:CbhHikari1@outlook.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            发送邮件
          </a>
        </div>
      </section>
    </main>
  )
} 