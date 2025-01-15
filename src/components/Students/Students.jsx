// import React from 'react';
import { useEffect } from 'react';
import './Students.css'

const VideoSection = () => {
  const videos = [
    { id: 1, url: 'https://www.youtube.com/embed/videoseries?si=-CSWeNW6cCX4n0sg&amp;list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA', title: 'Love Babbar DSA with C++ playlist', desc: 'This playlist by Love Babbar focuses on Data Structures and Algorithms (DSA) using C++. It offers comprehensive tutorials and solutions, making it a valuable resource for mastering DSA concepts and problem-solving techniques in C++.' },
    { id: 2, url: 'https://www.youtube.com/embed/videoseries?si=VS2E-XuWKDWt03mA&amp;list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz', title: 'A2Z DSA sheet Solutions by Striver', desc: 'This playlist by Striver provides solutions to the A2Z DSA sheet, offering clear explanations and approaches to solving problems. It serves as a structured guide for practicing and mastering Data Structures and Algorithms.' },
    { id: 3, url: 'https://www.youtube.com/embed/videoseries?si=PAPc8TGQehrymscH&amp;list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ', title: 'Kunal Kushwaha DSA with Java playlist', desc: 'This DSA with Java playlist by Kunal Kushwaha offers detailed tutorials and solutions, making it a valuable resource for mastering Data Structures and Algorithms concepts using Java.'},
    { id: 4, url: 'https://www.youtube.com/embed/videoseries?si=xN5ejlbDG6UAnWuI&amp;list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige', title: 'React complete playlist by Hitesh', desc: 'This playlist by Hitesh Choudhary covers a complete guide to React, catering to beginners and advanced learners alike. It includes tutorials on fundamental concepts, state management, hooks, and building real-world applications using React.' },
    { id: 5, url: 'https://www.youtube.com/embed/videoseries?si=kjWHsyLiimHoYBJU&amp;list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O', title: 'Operating System course by Neso Academy', desc: 'This Operating System course by Neso Academy provides comprehensive coverage of essential topics, offering clear explanations and practical examples. It is ideal for both students and professionals looking to deepen their understanding of Operating Systems.' },
    { id: 6, url: 'https://www.youtube.com/embed/videoseries?si=t0vYHtWqrrl35-R8&amp;list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak', title: 'Devops playlist by Kunal Kushwaha', desc: 'This Devops playlist by Kunal Kushwaha offers detailed concepts involved in Devops engineering. It covers all the major topics with clear explanations and in-depth discussion on all the major Softwares used in Devops.'}
  ];

  useEffect(() => {
    // Prefetch thumbnails when component mounts
    videos.forEach(video => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = `https://img.youtube.com/vi/${getVideoId(video.url)}/hqdefault.jpg`;
      document.head.appendChild(link);
    });
  },);

  const getVideoId = url => {
    const match = url.match(/embed\/(.*?)\?/);
    return match ? match[1] : '';
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center py-10">
      <h1 className="text-white text-3xl font-bold mb-10 title-animation uppercase">YouTube Links for Your Preparation</h1>
      <div className="w-full max-w-4xl mx-auto space-y-12 title-animation">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } items-center md:space-x-6 space-y-6 md:space-y-0`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <iframe
                className="w-full h-[200px] rounded-lg shadow-lg"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-[25px] text-white font-semibold">{video.title}</h2>
              <h2 className='mt-4 text-white pr-6 text-[12px] mb-4'>{video.desc}</h2>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 underline hover:text-indigo-300 text-[13px]"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;
