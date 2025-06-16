'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import type { BlogPost } from '../../../data/blog-posts'
import { blogPosts } from '../../../data/blog-posts'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BlogPost() {
  const params = useParams()
  const postId = typeof params.id === 'string' ? parseInt(params.id, 10) : Number(params.id)
  console.log('Current postId:', postId)
  console.log('Available posts:', blogPosts.map((p: BlogPost) => p.id))
  const post = blogPosts.find((p: BlogPost) => p.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">文章未找到</h1>
            <p className="text-gray-600 mb-4">ID: {postId}</p>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              返回首页
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← 返回首页
        </Link>
        
        <article className="bg-white rounded-lg shadow-lg p-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <div className="flex gap-2">
                {post.tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-bold prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-100 prose-pre:text-gray-800 prose-pre:p-4 prose-pre:rounded-lg prose-blockquote:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="my-4 leading-relaxed" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline ? 
                    <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} /> :
                    <code className="block bg-gray-100 p-4 rounded-lg" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4" {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  )
} 