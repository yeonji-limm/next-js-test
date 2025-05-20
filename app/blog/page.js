export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">블로그</h1>
      
      <div className="space-y-10">
        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Next.js로 웹 개발하기</h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>2025년 5월 20일</span>
            <span className="mx-2">•</span>
            <span>5분 소요</span>
          </div>
          <p className="text-gray-700 mb-4">
            Next.js는 React 기반의 프레임워크로, 서버 사이드 렌더링, 정적 사이트 생성, API 라우트 등 다양한 기능을 제공합니다.
            이 글에서는 Next.js의 기본 개념과 주요 기능에 대해 알아보겠습니다.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </article>
        
        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Docker를 활용한 개발 환경 구성</h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>2025년 5월 15일</span>
            <span className="mx-2">•</span>
            <span>7분 소요</span>
          </div>
          <p className="text-gray-700 mb-4">
            Docker는 애플리케이션을 컨테이너화하여 일관된 환경에서 실행할 수 있게 해주는 플랫폼입니다.
            이 글에서는 Next.js 프로젝트에 Docker를 적용하는 방법에 대해 알아보겠습니다.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
        
        <article className="border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Tailwind CSS로 UI 디자인하기</h2>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>2025년 5월 10일</span>
            <span className="mx-2">•</span>
            <span>6분 소요</span>
          </div>
          <p className="text-gray-700 mb-4">
            Tailwind CSS는 유틸리티 우선 CSS 프레임워크로, 빠르고 효율적인 UI 개발을 가능하게 합니다.
            이 글에서는 Next.js 프로젝트에 Tailwind CSS를 적용하는 방법과 주요 기능에 대해 알아보겠습니다.
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </div>
    </main>
  );
}
