// Edit this file to update the portfolio content.
const yt = id => ({ type: 'video', id });
const img = (src, cap) => ({ type: 'image', src, cap });
const link = (href, label) => ({ type: 'link', href, label });

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
      key: 'photo', title: 'Photography', tag: 'Portrait shoot', color: '#ffc23d',
      desc: 'Studio portrait and graduation sessions shot on a Canon EOS RP: lighting, posing, composition and retouching in Lightroom and Photoshop.',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => img(`assets/img/p${n}.jpg`, 'Portrait shoot'))
    },
    {
      key: 'cine', title: 'Cinematography', tag: 'On set', color: '#3dd6ff',
      desc: 'Camera operation, lighting, directing and sound recording for corporate communication and brand storytelling at Royal Integrated Ventures (RIVNL).',
      items: ['nCe8nF3Jmb0', 'dj4_KH9GxxU', 'jL1pMxswFgo'].map(yt)
    },
    {
      key: 'drone', title: 'Drone & Aerial', tag: 'Aerial videography', color: '#7c5cff',
      desc: 'Aerial footage that gives events, properties and places a sense of scale.',
      items: [link('https://drive.google.com/drive/folders/1vp2FwVPEhnl_nK9_ASGQ9A-51hiz-RP_', 'Open drone footage on Drive')]
    },
    {
      key: 'social', title: 'Social Media', tag: 'Cheser Media', color: '#3dffa8',
      desc: 'Content ideas, publishing schedules, brand voice and insight-led planning. October 2026: 654,029 Facebook views, 73,000 accounts reached, 29,439 accounts engaged; 13,200 Instagram views. Insights shaped a 30/60/10 content mix for November.',
      items: [link('https://linktr.ee/CHESERMEDIA', 'Cheser Media portfolio'), link('#', 'Event coverage: IMPACT 2026'), link('#', 'St. Cornelius Chapel Centenary publicity')]
    },
    {
      key: 'editorial', title: 'Journalism & Editorial', tag: 'Writing & publishing', color: '#ff3d8b',
      desc: 'Newsroom reporting at The Nation, consulting at KSMedia, WordPress publishing, and leading two publications as Editor-in-Chief, from pitch through publication.',
      items: [link('#', 'Add article links here')]
    }
  ],
  experience: [
    ['Sep 2026 – Present', 'Cinematographer & Video Editor', 'Royal Integrated Ventures Nigeria Limited', 'Plan, shoot and edit brand, promotional and corporate content; camera, lighting, directing and sound.'],
    ['Jan 2026 – Present', 'Social Media Manager (Remote)', 'Cheser Media', 'Content ideas, publishing schedules, brand voice and performance-led planning on Facebook and Instagram.'],
    ['Previous', 'Media Consultant', 'KSMedia', 'Story angles, research and editorial guidance for media projects.'],
    ['Previous', 'HR / Administrative Support', 'Fatimah Abdulazeez & Co', 'Client intake, case management, court filings, billing support and vendor liaison.'],
    ['Previous', 'Intern', 'The Nation', 'Field reporting, interviews, source verification and report preparation.'],
    ['Previous', 'Industrial Training', 'UNILAG Communication Unit', 'Institutional media production and public information campaigns.']
  ],
  tools: ['Adobe Premiere Pro', 'CapCut', 'Adobe Lightroom', 'Photoshop', 'VN', 'WordPress', 'Canva', 'Canon EOS RP', 'Drone', 'Google Workspace', 'Microsoft Office', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'LinkedIn']
};
