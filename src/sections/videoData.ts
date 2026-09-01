import { CARD_FALLBACKS } from '../lib/images';

export interface VideoItem {
  id: string;
  title: string;
  tag: string;
  sub: string;
  image: string;
  fallback: string;
  videoUrl: string;
  description: string;
}

/** Performance highlights, shared by the home, about and history routes. */
export const VIDEO_LIST: VideoItem[] = [
    {
      id: 'title-song',
      fallback: CARD_FALLBACKS.stage,
      title: 'TITLE SONG OF HTWE OO MYANMAR',
      tag: 'Title Song',
      sub: 'Featured Performance',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDtmD5eptDVH1JzvD4fRI_MKeohlaFeay0kmE6LHzWOQFf6NxwEDkVFHiar125afSW_OTVkrsB0Io-K2-lmMG9Zymjrx5nwWAUR6pgHvfrM5cGyQ4gHgdplJlC1IsWYt9MzrDFhGgO3deMaIOLTviV0IIyuJYpcufdD2oAA6LfNqrGXn9WP-ILw0OcFWTZ5wxNbgMmQ1dXAlmxVXRIMgQ5Vk0CtbOiWOjTKPMR8UF3fLA_kXWVlSzyFmXW82u54YoxcfqajMY7nmsAaFQ',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'The signature theme melody of Htwe Oo Myanmar Traditional Puppet Theatre, accompanied by the vibrant Saing Waing orchestra.',
    },
    {
      id: 'orchestra',
      fallback: CARD_FALLBACKS.orchestra,
      title: 'MYANMAR TRADITIONAL ORCHESTRA MUSIC',
      tag: 'Smote Khan',
      sub: 'King Puppet Act',
      image:
        CARD_FALLBACKS.orchestra,
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
      description:
        'Traditional royal entrance melody and majestic rhythmic cadence that heralds the arrival of the Mintha (Royal Prince) puppet.',
    },
    {
      id: 'documentary',
      fallback: CARD_FALLBACKS.archive,
      title: 'TRADITIONAL THEATRE BY MARK FISHMAN',
      tag: 'Documentary',
      sub: 'Htwe Oo Myanmar',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB5VFk4qs8wcoUQ-jRtHOXcRR72LlCdySsqu7rtlblNjDtLnYtSGcYu007mMiR90tfsC8W_Itu1FfipyrkYCZiWBUi4xhUzSxwzyNPstIMNS3ljQyt1XKmyc9exnXpkoKAmSRf6SNoTgzunumpxuDnjv_4MDKtOusT2TDQEPdAJXZdR0-b406I3NY6biJLdbUSCKw0mYJZ8KiL46NsgqBgq09VxkgihqLS9KXJz3hftWAXdDqr2GMmm3_vwHAnuRAB2Jm8TXwehn0T-LA',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'An intimate documentary profiling Master Khin Maung Htwe and the cultural journey of preserving Yoke Thé marionette arts.',
    },
    {
      id: 'behind-scenes',
      fallback: CARD_FALLBACKS.craft,
      title: 'PULLING STRINGS BY EMOTION',
      tag: 'Behind The Scenes',
      sub: 'Master Puppeteers',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDXRJIgfo0mu7pGuYZn6EECGiEgRUbKwk35poHkBI8ZfUz6jTvo0nxcPFSkPdG22oj3goHPK2nIetDnDqDwwA-HYf0Wj2CiTbIUXhpY2g_GQTKyjkc7fp5JgCDv8H10edg7cPUSVZX9Ro_53yR5iZ6v3w-v1RlJc0vK6HQ-xA0okHNhXFtZ8b1q97QJfikAewZxo3xO6BcoOx6xHJRJ1G0VRGdJF5koTqHf-Vt2FGbM2BfKDZP-j5QpslhDZP2aQPBJk89TQZ3_Gm38sw',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
      description:
        'A masterclass showcasing subtle wrist gestures and finger dexterity that breathe life into inanimate carved teak.',
    },
    {
      id: 'royal-dance',
      fallback: CARD_FALLBACKS.stage,
      title: 'ROYAL DANCE OF THE MARIONETTES',
      tag: 'Full Performance',
      sub: 'Cultural Heritage',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD5CoFrTbl6ZgL5OGZRojrmzNJ7oW4SrzL42jqyKLWsPNKzt4okvHdaH3NKaYheG49hXvqh9Tv_V3OQiLyDaR-9A6yY2AmsVylrmbrSFHtlP8sy2ddh6gP3f8C1GYiytVhAuVZcrstum2sxesZqA3O-Re3KrQLydLFFqeQkRxOCXzwFQEfWiKT5oCv8t5aYLs4DQNOQzElBIJNN9D0xIJiEeKGdg2CaY4R_skvG2tzZUpR6DYK2t9bAUHcZRFG74Gu2SB5RZyHFjNlylQ',
      videoUrl:
        'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
      description:
        'The classical courtship duet performed with 28 to 60 intricate control strings under ceremonial lighting.',
    },
];
