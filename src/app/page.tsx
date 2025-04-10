import { PasswordGenerator } from '@/components/PasswordGenerator'

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-24 flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          密码生成器
        </h1>
        <PasswordGenerator />
      </div>
    </main>
  )
}