import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Next.js 예제 프로젝트</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        <Link 
          href="/test"
          className="group p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600">
            동적 라우팅 예제 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-600">
            Next.js의 동적 라우팅과 쿼리 파라미터 사용 방법을 보여주는 예제입니다.
          </p>
        </Link>
        
        <Link 
          href="/todo"
          className="group p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600">
            투두리스트 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-600">
            React의 상태 관리를 사용한 간단한 투두리스트 애플리케이션입니다.
          </p>
        </Link>
        
        <Link 
          href="/blog"
          className="group p-6 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600">
            블로그 <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </h2>
          <p className="text-gray-600">
            간단한 블로그 페이지 예제입니다. Lorem ipsum 텍스트를 포함합니다.
          </p>
        </Link>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          이 프로젝트는 Next.js와 Docker를 사용하여 개발되었습니다.
        </p>
      </div>
    </main>
  );
}
