// Edit this file to update the portfolio content.
const yt = id => ({ type: 'video', id });
const img = (src, cap) => ({ type: 'image', src, cap });
const link = (href, label) => ({ type: 'link', href, label });
const mp4 = (src, poster) => ({ type: 'mp4', src, poster });
const FULL = 'https://drive.google.com/drive/folders/12E9JlCz8m80yeBs0bURcQcT0YUxmKN1c';
const pdf = (src, thumb, cap) => ({ type: 'pdf', src, thumb, cap });

window.PORTFOLIO = {
  roles: ['Video Editor', 'Cinematographer', 'Social Media Manager', 'Photographer', 'Journalist', 'Drone Operator'],
  folders: [
    {
      key: 'video', title: 'Video Editing', tag: 'Post-production', color: '#ff6a3d',
      desc: 'Brand stories, promos and social videos: footage selection, pacing, transitions, sound and colour, edited in Premiere Pro, CapCut and VN.',
      items: ['nCe8nF3Jmb0', 'dj4_KH9GxxU', 'jL1pMxswFgo', 'QtNzYix83MU', 'KypxUCoHr-o', 'RcQchnOa-8g', 'zls4XGsUlv4', 'o1G4RvouANQ', '8ghlxg5vaC8'].map(yt)
        .concat([link('https://drive.google.com/drive/folders/1cqJaDqpICZEB0RbMD_n27lH1UDQGrKlP', 'Full editing portfolio on Drive')])
    },
    {
      key: 'photo', title: 'Photography', tag: 'Portraits & events', color: '#ffc23d',
      desc: 'Portrait, graduation and event photography shot on a Canon EOS RP, including the Yaba College of Technology 37th Convocation, church vigils and the Higher Calling Conference 2026: lighting, composition and retouching in Lightroom and Photoshop.',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => img(`assets/img/events/e${n}.jpg`, 'Yaba College of Technology 37th Convocation'))
        .concat([1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => img(`assets/img/p${n}.jpg`, 'Portrait shoot')))
        .concat([['aQkFxUmHFzJLqz1o7', 'Lagos Province Youth Fellowship: August Overcomer’s Vigil'], ['zimw6GcKXJ1tZ2kj9', 'Throne of Christ'], ['zqXRvGaGakkVpzvW7', 'Lagos Province Youth Fellowship: Monthly Vigil'], ['2JZkvmnZ8oDsdY5E7', 'Higher Calling Conference 2026 (Awakened Unto The Harvest)']]
          .flatMap(([id, ev], a) => [1, 2, 3, 4, 5, 6].map(k => img(`assets/img/albums/a${a + 1}_${k}.jpg`, ev))
            .concat([link(`https://photos.app.goo.gl/${id}`, `Full album: ${ev}`)])))
        .concat([link(FULL, 'More photography on Drive')])
    },
    {
      key: 'cine', title: 'Cinematography', tag: 'On set', color: '#3dd6ff',
      desc: 'Camera operation, lighting, directing and sound recording for corporate communication and brand storytelling at Royal Integrated Ventures (RIVNL).',
      items: ['nCe8nF3Jmb0', 'dj4_KH9GxxU', 'jL1pMxswFgo'].map(yt)
        .concat([['v/19tYGpVogq', 'RIVNL brand video'], ['r/1JMEds8th9', 'RIVNL reel 1'], ['r/1HN3XM9d9a', 'RIVNL reel 2'], ['r/1ErKVbzjQh', 'RIVNL reel 3']]
          .map(([id, l]) => link(`https://www.facebook.com/share/${id}/`, `${l} (Facebook)`)))
    },
    {
      key: 'drone', title: 'Drone & Aerial', tag: 'Aerial videography', color: '#7c5cff',
      desc: 'Aerial footage that gives events, properties and places a sense of scale.',
      items: [mp4('assets/video/drone-0956.mp4', 'assets/img/drone/0954.jpg'), mp4('assets/video/drone-0962.mp4', 'assets/img/drone/0960.jpg')]
        .concat(['0427', '0954', '0955', '0957', '0960', '0965', '0967', '0980', '0981', '0989'].map(n => img(`assets/img/drone/${n}.jpg`, 'Aerial photo')))
        .concat([link(FULL, 'More aerial work on Drive')])
    },
    {
      key: 'social', title: 'Social Media', tag: 'Cheser Media', color: '#3dffa8',
      desc: 'Content ideas, publishing schedules, brand voice and insight-led planning. October 2026: 654,029 Facebook views, 73,000 accounts reached, 29,439 accounts engaged; 13,200 Instagram views. Insights shaped a 30/60/10 content mix for November.',
      items: [link('https://linktr.ee/CHESERMEDIA', 'Cheser Media portfolio'), link(FULL, 'Event coverage & publicity work on Drive')]
    },
    {
      key: 'editorial', title: 'Journalism & Editorial', tag: 'Writing & publishing', color: '#ff3d8b',
      desc: 'Newsroom reporting at The Nation, consulting at KSMedia, WordPress publishing, and leading two publications as Editor-in-Chief, from pitch through publication.',
      items: [img('assets/img/editorial/ed1.jpg', 'Editorial piece by Adelumola Adedayo Solomon'), img('assets/img/editorial/ed2.jpg', 'Editorial board')]
        .concat([['rmd-faces-backlash-over-birthday-wish-to-omoni-oboli', 'RMD faces backlash over birthday wish to Omoni Oboli'], ['top-10-in-demand-tech-skills-to-stay-relevant-in-the-digital-age', 'Top 10 in-demand tech skills to stay relevant in the digital age'], ['regina-daniels-under-fire-over-congratulatory-post-to-priscilla-husband', 'Regina Daniels under fire over congratulatory post to Priscilla’s husband']]
          .map(([slug, l]) => link(`https://thenationonlineng.net/${slug}/`, `The Nation: ${l}`)))
    },
    {
      key: 'certs', title: 'Certificates', tag: 'Credentials', color: '#c8ff3d',
      desc: 'Professional development certificates.',
      items: [['critical-thinking', 'Critical Thinking & Problem Solving'], ['business-writing', 'Effective Communication & Business Writing'], ['everyday-ai', 'Everyday AI'], ['personal-effectiveness', 'Personal Effectiveness']]
        .map(([f, c]) => pdf(`assets/certs/${f}.pdf`, `assets/img/certs/${f}.jpg`, c))
    }
  ],
  experience: [
    ['Sep 2026 – Present', 'Cinematographer & Video Editor', 'Royal Integrated Ventures Nigeria Limited', 'Plan, shoot and edit brand, promotional and corporate content; camera, lighting, directing and sound.', ['Premiere Pro','Lighting','Directing','Sound','Brand video']],
    ['Jan 2026 – Present', 'Social Media Manager (Remote)', 'Cheser Media', 'Content ideas, publishing schedules, brand voice and performance-led planning on Facebook and Instagram.', ['654K views / 30 days','Content calendar','Insights','Reels']],
    ['Previous', 'Media Consultant', 'KSMedia', 'Story angles, research and editorial guidance for media projects.', ['Research','Story development','Editorial standards']],
    ['Previous', 'HR / Administrative Support', 'Fatimah Abdulazeez & Co', 'Client intake, case management, court filings, billing support and vendor liaison.', ['Operations','Documentation','Vendor liaison']],
    ['Previous', 'Intern', 'The Nation', 'Field reporting, interviews, source verification and report preparation.', ['Reporting','Interviews','Fact-checking']],
    ['Previous', 'Industrial Training', 'UNILAG Communication Unit', 'Institutional media production and public information campaigns.', ['Media production','Internal comms']]
  ],
  tools: ['Adobe Premiere Pro', 'CapCut', 'Adobe Lightroom', 'Photoshop', 'VN', 'WordPress', 'Canva', 'Canon EOS RP', 'Drone', 'Google Workspace', 'Microsoft Office', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'LinkedIn']
};
