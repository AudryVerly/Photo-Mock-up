import { Pin, ExploreCategory, ExploreIdea } from "./types";

export const INITIAL_PINS: Pin[] = [
  {
    id: "architectural-silence",
    title: "Architectural Silence",
    description: "Discovering the intersection of brutalist geometry and organic warmth in modern living spaces. A study on how light transforms static concrete into dynamic canvases of emotion.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtc2jyRQeYS4HZO0k_NJDd047otBhX5JCd1FEyxa8ns3_Nvhyk9gkVdThxZdmy6DuRYHhoKJYmOAu6b6gVdnsgbmY1U4QrCNkzSNISYGsnbbx-kDNYADU7noDU2npeV0PufhdvGaJjv06Y-LZ8vHTDmJb1b4OacCt-qBHNBrxnCToe32qUR5qPH-D3bAlktc7MU9tQTjkjJ5jXqsDzLVWUrM6WIjDdG8woahDAuErV82G6q5A6TVSBGghv1ncjg6zDqYQ89GKtxfU",
    authorName: "Elena Vance",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1F8y4PqW0ewloh_JEVwxPlVQBd7Evic9G7iW-mJcGMQB_Q3d56fUwPoGoxdtd_8M-MxzmCg232tUb4V6SSyrPcq4cqX36nJoIAVP6PrId-ppdW7Mp7HvEfKdPGJWvJKEWNHuT5XRa1WQSLt4nwp1eayThTs989f3dw1poDE5QG56xSEmLpBsnGg_2GYFNkwc3ohrGujfMweoK36JEx7DKJLCCTa4HJj0vRFCkF-vz5OLid9RYyK1tho4o7hBucdOUY-Pz4C__MvE",
    authorFollowers: "420k followers",
    category: "Home Decor",
    likes: 1350,
    comments: [
      {
        id: "c1",
        authorName: "Julian S.",
        content: "This lighting is absolutely impeccable. I need to know what lens was used for this shoot!",
        likes: 12,
        timestamp: "2h ago"
      },
      {
        id: "c2",
        authorName: "Sara W.",
        content: "Definitely adding this to my 'Home Inspiration' board. Love the textures.",
        likes: 5,
        timestamp: "5h ago"
      }
    ],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "reflective-spaces",
    title: "Reflective Spaces",
    description: "A vertical shot of a minimalist living room featuring a large round mirror reflecting a soft sunlit garden. The interior design is Scandinavian with neutral tones and natural wood textures.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCLyBmwqZ5RNdgayrakroAMr9IAzKPPsfH82NZaqe38tlaA2v0xpcSwjh4S6ZApHsbctWUWoxbhpglXAiwmBIwhnHGs_fNYdlntZL4CrXWgr6sUOtrg7Jhta5Qk-EbmiDxVNQh6a_G01Z4o7vNE3MkeRCiiK9DzBP6sXIZNqzyUZjTDK88_RFurMxOfBVR2Bb0plIlI48wWDBtsabsCkccZC01gn0iJTpC0EvXgCxqWoQ1BRO3laKWYlwPzaxLZ8cq8IizYchbnMw",
    authorName: "Elena Vance",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1F8y4PqW0ewloh_JEVwxPlVQBd7Evic9G7iW-mJcGMQB_Q3d56fUwPoGoxdtd_8M-MxzmCg232tUb4V6SSyrPcq4cqX36nJoIAVP6PrId-ppdW7Mp7HvEfKdPGJWvJKEWNHuT5XRa1WQSLt4nwp1eayThTs989f3dw1poDE5QG56xSEmLpBsnGg_2GYFNkwc3ohrGujfMweoK36JEx7DKJLCCTa4HJj0vRFCkF-vz5OLid9RYyK1tho4o7hBucdOUY-Pz4C__MvE",
    authorFollowers: "420k followers",
    category: "Home Decor",
    likes: 420,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "tactile-minimalism",
    title: "Tactile Minimalism",
    description: "Detailed macro photography of textured concrete walls with dramatic lighting and shadows. The image emphasizes the brutalist aesthetic through sharp contrast and raw material feel.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwKfWc5i_deZxV5xOSgk1XCx17tfidE-4UYarFfCvVol4JUiWEpTxcavuKo8GbnSbUMuNDx-_Zd6k63nmViE5SGxdwqyaTcfVnGFyH18F2ydrTmJDM41GP8EMIdz4MurPUCtVVvyyxl39SxuFBdrsMhRH3lIldHBowdB9b_PnuI8t8l-SCzSCDF3Y6S_otQZZeOAuJhNefdDOVJxxvEg7WRkKyV_ejRVpTZQ3gz413MY1_-fTw1Oao-bN-fDW3o8TONIYu9HquAPk",
    authorName: "Artisanal Labs",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxm7IEdzRigTVQWGlVORzlwD6I6cIZAVMlS3kRqGoxN1jlQ90Nzgyq9NmGhJoSaoGeA1lnsn0tjq4J4WCcQPX6RSKXC6sy6xya3SwVq_VZ3LJUdoT6_CYRCCxdBlkPeqCfjDgCdMZU_2iHIRrzo6vMZ5qXFJdXBht2UC7szcqKByvXqaIHrhEkyoUrccRgPxhi7zsoBw0w7U5M2pvf2IoRNfjY2ruf_tK18LHRXdtY0O3AmTcxCM3PeRiAjn6S7RPpvcncDvAWUc0",
    authorFollowers: "85k followers",
    category: "Art",
    likes: 218,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "geometric-flow",
    title: "Geometric Flow",
    description: "An ethereal view of a spiral staircase from below, creating a mesmerizing geometric pattern. The lighting is soft and uniform, with a pristine white-on-white color scheme.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1JaECAGgMKl0iT4Ps-3fiJzHC3hkooyN6NkhSgZNjaa4Ui_47ijgCUMZjNLVlLU6YgnsGak73j4UPty1CTGkAWp7gubAaLVxz_acat2qKvSAqj-_JF6ATShyvJ-VVqnMLWj3AdjwsTODnpUh6rBOB-nKyv9K0YW2wmwpL5DZUFqGbXZeaZWNypu2JP8_EVTRxJO5RjlEoO2RKkPtgtc7ayOdHrmkJoBOSR8WerCZ15nAC_7oBjn4xyaP749laBXK5lvm0zVQGUUs",
    authorName: "Design Milk",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLvP7qKq6XZ1dJkh4kwXvRz0u8v8_lwXtdo8WvMx_Ks9lU00lySlO1edykxq9P1IgMwP4TmVlbOu1F3OL-BMeInZ9AhUAd_wokhwSA-cV8KWddXI5M9S08ki3XJrAb00ghJZrv4EUFL2T0F5w_RKuu6-Js1IvSbOl8stekn11tCyZNOsfygXjGURc3hNWjJdAtqewT0KUS6zRYhyBkIE81AlAHCnlbPlFG4QJWz7ewCI4VSXuZJDrTNEEd6jW2ASmQoXk3R9NnTCs",
    authorFollowers: "1.2M followers",
    category: "Art",
    likes: 512,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "organic-accents",
    title: "Organic Accents",
    description: "A single monstera leaf in a clear glass vase against a stark white background. The composition is off-center, creating a modern and balanced aesthetic. Bright, high-key lighting.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCDLCEmqiefPcp1ls4ex2zvV3MjKNwu2NjxpMxR4a2OE1jMLxsPd4Tj5fZ3UssnuIAywUFrcweim2ybb3twFkpaS-ZBmQEYPBSHMtuRmTN__AXw-BKDDgntWreU-S_WV8KiErdcFmhrgttQ3fs0596P1qKzyoLGnU5HVtaeY4oY674FfeEgSCeM0qIKpXw1sl4u9UVr6qSp8tQK5REQcxzgtxPYVL7oM9hyJTOfr4ttaQYwJNH07GQZXh8G19_MZ78inNyphhC0xM",
    authorName: "Craft Daily",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB8JhUZpPgr154hdCoI6lF_IeO31S_5OiV7ab0Ej0YVmAcaRNio2Tf19dh1DZZkSZvaxks5D9b6vKwijbcGnPt5nGR3SQBLLq-afy8NPGWqLMAQ6Jz1fCHgCaNX5kV4Y4KYaaAaDC3SfM2UMH1LFQImFhqYMzJpbHYM_WJ7cw6KLKDLg8qvEXE9HF8_voILQvYy0xuWKtTc7YgZEBcZc-Qw4D_fB-atJRxDw5_BGw9ZLC625u13LzwKBx7W2uiDsGtZqoes_CuRgs",
    authorFollowers: "54k followers",
    category: "Home Decor",
    likes: 194,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "urban-vertigo",
    title: "Urban Vertigo",
    description: "Modern architectural detail of a glass facade reflecting a clear blue sky. The lines are sharp and vertical, creating a sense of height and limitless potential.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmVrjKh2awMdgFgYoVSnzgSVcqY8cpIE7KGj7SsUv_JlMrIgUtk2uLd9rNxtbU3tCgKLDfgG4pW5h9fZn1V9OC8OXtQ4drS78Il7eZOcjAFOZHjpkg1ypD9votD147BqHaRmNp2xqisEyuJvhZtA35ZbpPMW-r6ai4fsT7c2bj_k-gL-BsvqLNjcCGT1kgXHkBl7jlurRB2OSTOApR72mJHwk5gJkqn9J4zodtTWePtZbHzCmtK5P9QHt2qytguQcGvo04d0ct7TI",
    authorName: "ArchDaily",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnw5Vf8119TbWcUeyOz3hrlCCKM7gFySUTLo_RveaEScr8FuvfzC8CR8b8e2X51vQ3QFSdlCZ67zagygK4LWukUVIvzFbxWhq7xwa-yv6okwYAojFchxdlJazXdeG4-IBuLlec4RKeHEGW1sD65vI3Utt0Vn8agafHke1ejNtdQwNH2dI1_56AdyyC8hJow3Jq1UIMVERoiCOy4dytEB7JukspSdKzznGvBrD23jCq_WKkIbU2iuI4IzZHqlrnSB9hd7a3ZeNbRP4",
    authorFollowers: "2.1M followers",
    category: "Art",
    likes: 884,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "focused-work",
    title: "Focused Work",
    description: "A minimalist workspace with a sleek wooden desk, a thin laptop, and a cup of black coffee. The mood is focused and productive, with plenty of negative space and natural window light.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpGgESTi93MnSN3hG4yXU2HjTo-NCwjeDfP2_hP0GG2PqWeOVLnHrBz379EVq35-8FLiCZI0B9AMHvmF_Pjzf1NcD2ehjSUNmRgFPkjzFq452MC8deEFQ5rDY0KsCxXTy2BPPBik3b5_-BrAPtF7wPX87nyt5g8Jq9DW9aGG-Fhb2xF17V3Hhr1I7-rws5GflBVU8f9qe44F9-kyAU1W2sGeRYzHFZ2o5MDmUGKxF5TeFjVSblVeUDO4_iOLQWK4Z5tvmzhrfS77I",
    authorName: "Tech Inspo",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4cNRupJWX0wBjct26qEctsC9xztAw2QhnuorX89ZLinxUpoH72gzwcIs0IOyoWoUEJD3TCsVm0A69XzwqDQUCWjz-FYp5vM54DpfrIM4h3tJAg_Y_IBM72YCQvBkHFfIQpeBsR2ye-ki1Tl1oZPprhcnWlcNJz13tyNFYZOMWK16SUoH3neoCRJ2Rd8SOCLBBkA5mP5aOiJL0NGjXrw8HEb4e0Ga36F8FvorDESm8DTFB5ZlLqw0yhyPtsFpWNB_sNPSp22dEES8",
    authorFollowers: "135k followers",
    category: "Style",
    likes: 673,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "desert-modern-retreat",
    title: "Desert Modern Retreat",
    description: "A minimalist architectural photograph of a modern desert home with clean lines and warm cedar wood cladding. Captured during the golden hour against a deep blue sky.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfi038De-NW0clgI7zd_N1cL7F9sCNS_4S8w-oj6fnXXmBmF1ephHwzGobOUcrwk7HdaKxVzOlsvfeUcrLjSdbDqsfhg6vDnmZzNeVBgX0GrvTQE_L1YJWE6k3ap7zPkouZxwJrFuXwxCUPjzHSB0pALANGzj2U422S1J04Xj-0Pj1Mx1RwFKST2qWW27minb_Syw6rcESZyqelUvDVB2NVGIa0IlzMQaj--ARwrSxR0wPha9Hl5nY-Ciw5fSH8ntVvd8-0WQt4VM",
    authorName: "ArchDaily",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnw5Vf8119TbWcUeyOz3hrlCCKM7gFySUTLo_RveaEScr8FuvfzC8CR8b8e2X51vQ3QFSdlCZ67zagygK4LWukUVIvzFbxWhq7xwa-yv6okwYAojFchxdlJazXdeG4-IBuLlec4RKeHEGW1sD65vI3Utt0Vn8agafHke1ejNtdQwNH2dI1_56AdyyC8hJow3Jq1UIMVERoiCOy4dytEB7JukspSdKzznGvBrD23jCq_WKkIbU2iuI4IzZHqlrnSB9hd7a3ZeNbRP4",
    authorFollowers: "2.1M followers",
    category: "Home Decor",
    likes: 2450,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "productive-desk-setup",
    title: "Productive Desk Setup",
    description: "A dark and moody aesthetic photograph of a home office setup with a sleek black desk, mechanical keyboard with soft backlighting, and a concrete plant pot.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3dPXfGnKMLaYFBow4IF-h4fdXjnsT6aoxpsT-AKR6EzLFRouCKRq1sGwbQ8UEoYcVX-VgO9hEOx89J_5XakVz8R7MlqUX9BPyRLnsB_E38niahvLa2rY4QfVhiRRyWb8WhRQGIQX_O5f8AovembPWn6Wr7IU0os5TC9gOGkqjZSG6mBsEEIP8REgSqwS1rQLpakVYwLqMPuvNmNgGViewt9vYfKJ2XiKI0WnzLBK0RGO9TH7Qcl7X8d9g8WY0kCnJO9BjphN-9E",
    authorName: "Tech Inspo",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4cNRupJWX0wBjct26qEctsC9xztAw2QhnuorX89ZLinxUpoH72gzwcIs0IOyoWoUEJD3TCsVm0A69XzwqDQUCWjz-FYp5vM54DpfrIM4h3tJAg_Y_IBM72YCQvBkHFfIQpeBsR2ye-ki1Tl1oZPprhcnWlcNJz13tyNFYZOMWK16SUoH3neoCRJ2Rd8SOCLBBkA5mP5aOiJL0NGjXrw8HEb4e0Ga36F8FvorDESm8DTFB5ZlLqw0yhyPtsFpWNB_sNPSp22dEES8",
    authorFollowers: "135k followers",
    category: "Style",
    likes: 1980,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "summer-burrata-bowl",
    title: "Summer Burrata Bowl",
    description: "A gorgeous flat-lay Mediterranean salad bowl with heirloom tomatoes, creamy burrata cheese, fresh basil, and a delicious balsamic reduction glaze.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJwBTLDFYrMwLSNK5JT6FSy7R_mnK-CYVuiOfiM3OCROr8Gc1JtQPyd1cYE5CQsp0kZ75nFOaqvDSCIPPBJmqklVI2Vy8mk8xnGkTLRUMC8UMFyoHsURC-8t2gkN-1rcJqGPs1tHFM6s73ag7y5dFqwnkw4uBYIB_Mqb3pwI36FceHXprOHWdXTfxmEvuOp8DRvatl2joUS68WsPvCQBhJLRWvXU6wJlZmDyWpUZrmzXKGc11Agnc2TYezg7vwZvM3hi1JYoEhOlI",
    authorName: "The Fresh Table",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxm7IEdzRigTVQWGlVORzlwD6I6cIZAVMlS3kRqGoxN1jlQ90Nzgyq9NmGhJoSaoGeA1lnsn0tjq4J4WCcQPX6RSKXC6sy6xya3SwVq_VZ3LJUdoT6_CYRCCxdBlkPeqCfjDgCdMZU_2iHIRrzo6vMZ5qXFJdXBht2UC7szcqKByvXqaIHrhEkyoUrccRgPxhi7zsoBw0w7U5M2pvf2IoRNfjY2ruf_tK18LHRXdtY0O3AmTcxCM3PeRiAjn6S7RPpvcncDvAWUc0",
    authorFollowers: "320k followers",
    category: "Food & Drink",
    likes: 3120,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "slow-morning-ceramics",
    title: "Slow Morning Ceramics",
    description: "An artistic close-up of a handmade ceramic mug with reactive glaze in shades of deep ocean blue. Soft morning light on a gorgeous linen tablecloth.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAua0MePSqj7ScMQEJPsVLvyleiycXK2IaXppI5HnN26cAM6yvy6KooIrh9SNh862hsGwHm-1f0HmrhUqqYW2QuhbdT9ZS67B04Q1YteeaGi1cFO6nv9k9yjoJNCRo_dFlKOU_JhPLw0CMPTm9X1z6e4r2MGEMZ6sJtDCr8S4lmif1lUZ0BkRfT1ZJUtb3wP6ds9DC6HCW9DNFfBHodE3it8KopezfYZTrTLe5Gwm-_1zD5zvgsWifs9NbDTN5G27Zj6rRy7VcAUj0",
    authorName: "Craft Daily",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB8JhUZpPgr154hdCoI6lF_IeO31S_5OiV7ab0Ej0YVmAcaRNio2Tf19dh1DZZkSZvaxks5D9b6vKwijbcGnPt5nGR3SQBLLq-afy8NPGWqLMAQ6Jz1fCHgCaNX5kV4Y4KYaaAaDC3SfM2UMH1LFQImFhqYMzJpbHYM_WJ7cw6KLKDLg8qvEXE9HF8_voILQvYy0xuWKtTc7YgZEBcZc-Qw4D_fB-atJRxDw5_BGw9ZLC625u13LzwKBx7W2uiDsGtZqoes_CuRgs",
    authorFollowers: "54k followers",
    category: "Art",
    likes: 1250,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "secret-bali-waterfalls",
    title: "Secret Bali Waterfalls",
    description: "A stunning tall-format photograph of a hidden waterfall in Bali, surrounded by lush tropical ferns and emerald green moss.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsQzOWZr3GKQinD5zyILrOBtl7OaJPNzATKKhE2gaA7a7QGHiYEXOx2VF5y7F0_m83K_OTT28ldzoLwsjeEuAjPk0iDnFiPRRMQa3arKw34tBolj3DAHaeYSWZQCQ1DqKY2OSwcJ2_EEv7Y8TDss9gDDu29AccD4ljJAyO7AtYmwz_RI9QrrkgT4GoF8rWaL2lodV5K-gp7acjj7YVyYsdmLm64LboRdDxdS77vA8BdxQPHzqiYR_D81qy5J2TFO2HJ3zQWxWSDbA",
    authorName: "Wanderlust Journal",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvnblc5dpvJBUzHmZ6cO2dQtmlUSCryumqyWnnnxYJrdWJjnUblaj6FUmHC9cNozkHKGYiB1daVx391ldi1HBCHaXOlv1nbtVv_vJXQfRRz9GPtavmR8BLKPBtWieHPEWT9EzXZHTJQDVsQ4dU6kGkVZRQtYK2eNoRX81a7F46F8MHn7vdqFhr8ygHe9PRMi-DSCMj3n2D5aITAt8tbK5CGc4Zydj7zBFDqNBTFQAsGsgoETl3KBOb49k8EhH9WZ2MyGv8LVJw0qc",
    authorFollowers: "650k followers",
    category: "Style",
    likes: 5410,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "italy-travel-guide-2024",
    title: "Italy Travel Guide 2024",
    description: "A breathtaking view of the Amalfi Coast at dusk, with Positano lit up beautifully against the darkening Mediterranean sea.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkKnNTSt_OiClUWZOk3BnVcBBvAYNwPgewBvfy6xskA3yimGcHAOx3wEa5FjAP5Jen5l5_gchfUFNHy7TKa1shQQB8jAIJQ6AecNTst0xz5SxbtqYX9fCK88n9wu8NyToDu_uhzNySGJCh9vwIHaM6swhBwOJM1NrH3QA4MQaItEndmME-VEh6czJAGh8UGZBZ3gRhjiOXI7xfJMlLzMdjg1FSSpA7Q1zPB5CvbnySgrmM2mZTAivmOgkEi8cBdobq43Vb3-xpgCQ",
    authorName: "Voyage",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvraAHftcthPrCTsDcHY1GGbgQOdUBsvdf__RYdnR8TOeZ3Q_dgHnIijJSFLago1L0rDkbCWKbgJdmxMFz6st7Ei3Zx5ixce46ZtiEpjxUroYB7kVLanY-bpz28V60N2XfkCeyxhxLxTTiOAhDdgbSzQiLHTzCqQkConCqvjiDzfPqMQPcf84vUc4WtWV8ymQjg_5GrRG6IgMzRFikPelNhHI3DZDg-mV5N5oroMdLMTaE4-Zl-cYBb2iysA4C8nPeusbGcOvZX84",
    authorFollowers: "95k followers",
    category: "Style",
    likes: 4120,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "spring-capsule-wardrobe",
    title: "Spring Capsule Wardrobe",
    description: "Fashion editorial shot of a woman in an oversized beige trench coat and wide-leg trousers walking down a minimalist street.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJcUTTeipUwjTUdHLkh2SZvGMuRt2cc7kFndQob0v3afu2h60UOkkL0kw0QfOkvzrxfoXmfoPBb3KBExl6Jq9jOlKFvK9bJ2m1bXoTCsEps8tFaJ-AXMGXSZyjDsuVc6qKkS0I6f5wGW5axI8OFnYQELIkHU1y-WUyITzVuRGNnocIWW5Cgo0pCIRntb2JEyc4FbI3ys6QqiQ5idNOFXxyB8Ji1sCSWqYA6H5GosNRxPrNkAAbKeKFAEragVywLSz71OQ3qtsZibE",
    authorName: "Vogue Inspo",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0q98MJ3fExX7qqYaIJfIHFKs0-cSV36AnYhu8Wg_RkXJBttTrRM0ixYcGiYez-6wlR6WHVCr9Kr86uKbOVNG69J0eKcYyPZ3PmtQ54gpUiwtwq5VQLrDRQ3XJWJXnLOBAMCEJ1O1tl-JoCkxLWLZsYi6qFqjx7NW5f9LPg0kTIPzsnhyydhDRwCSpS-o_WPzwlt17y6nyGwcPvBvVrWpS4TiYvvn4QWNIANClcgxbwufC3CoFzMo3kRpL9wiHwQrxeszy0gMnGBQ",
    authorFollowers: "820k followers",
    category: "Style",
    likes: 1820,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "tropical-breakfast-inspo",
    title: "Tropical Breakfast Inspo",
    description: "A vibrant, healthy smoothie bowl topped with sliced dragon fruit, kiwi and chia seeds. Styled on a crisp white backdrop.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSZF8GuY4WjrM9JOZSowqgrLz438ed527HbOxwWA1bWH1bNBay_C4A8q3oFyISMr3fvXF9HfZnHj5TNeAchaiXCCfW2aG4fjtTpVPErMCBFYhXI3wOp09TlvoEzzyoViMAZEAH-pIp6GX7PB1OXxz_GP5fJ146Vn2kaFWwTuPCp_ORLPm-TjK__kqWnqHVfW4s3pomZ_f-ymWnOmF9S7oTZyRqnjuLc4tWyQf900k0RxxEa7vzrxg2yMaKqV-Bmr3S8s1v1YDVlBg",
    authorName: "Purely Pink",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZOhzSPEV_EMqUYSk_GbJ8eVZxg-EXNn2YauZ-VHmsF0WqsQmxYtZD0CFrhRyQPd8EjVmj5fldQs61zNq_VsJK5di-PJNUiexUF6l_cho3_-wuR1HdQRoX6PmN2fhEqK0J7Ske-kqGAt5VsLFe4UCb4xm9BbquBzpRVwoduAJi0yPvqR-eDMbyWNmGiBtLkIiet8L1SsN5P3-7D5SScrcDVDoeTjcKPvZX7Mefx7BGbW3JuRfNjfjSndJkEg23nSHeKKNYtP75L7I",
    authorFollowers: "230k followers",
    category: "Food & Drink",
    likes: 2710,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "minimalist-workspace-essentials",
    title: "Minimalist Workspace Essentials",
    description: "A gorgeous, clean desk setup featuring a mechanical keyboard and a small succulent plant, captured in bright, overhead lighting.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuABVDYQiCF8NYalDIQD8BJJR6ObzuwhF4_TYblOzzyRhXKnJjoa7THZT6d0GwLlDTHjxbqGbryuxgwfKMNtWZsaOLCi6JuRUkgU7WdElQPRujGGDgeOX4DdKWze_I8N7T9pBB9E3z4egTbNu6FTqrGjEolD1YqiIKOQaeBko5rDa-XDlEWOVxRp3pCcFg-73hIrCeqG-50dGMS_42V2xXb4PqymsAXIbueH2vsr0ZZ1cf4MbhJg4jtUD22dt5HDMTdvR_CuM8812Ns",
    authorName: "Tech Inspo",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4cNRupJWX0wBjct26qEctsC9xztAw2QhnuorX89ZLinxUpoH72gzwcIs0IOyoWoUEJD3TCsVm0A69XzwqDQUCWjz-FYp5vM54DpfrIM4h3tJAg_Y_IBM72YCQvBkHFfIQpeBsR2ye-ki1Tl1oZPprhcnWlcNJz13tyNFYZOMWK16SUoH3neoCRJ2Rd8SOCLBBkA5mP5aOiJL0NGjXrw8HEb4e0Ga36F8FvorDESm8DTFB5ZlLqw0yhyPtsFpWNB_sNPSp22dEES8",
    authorFollowers: "135k followers",
    category: "Style",
    likes: 1040,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "geometric-architecture-design",
    title: "Geometric Architecture Design",
    description: "Abstract spiral staircase inside a modern museum. Stark white curves contrasted against the deep blue sky, creating incredible perspective.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjnNNm-I3s5ToJRuKEaHj1VhBzgQYOLs7K-GMHA31ss5_amak842GXCDVJzcohU3rVLYGRW8Cj3B_bQrQKCcDd0eQOfOiQOuQaWaQYo8tJgNGwaM84XbH1IvLmRu6fEzKJvbFvNrksJCJssTyXd-gFz0__Gz9GBAfVhxj9zJRdaDqI4hoiyzLuW4pljlJpAaOX5Fn31ZojW37IUhj8fgxRJgcBYv4y4HTeB9amsWgqlIgjfS14p-4ddYWjLw1pVmaV_up7U6qX-M8",
    authorName: "ArchDaily",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnw5Vf8119TbWcUeyOz3hrlCCKM7gFySUTLo_RveaEScr8FuvfzC8CR8b8e2X51vQ3QFSdlCZ67zagygK4LWukUVIvzFbxWhq7xwa-yv6okwYAojFchxdlJazXdeG4-IBuLlec4RKeHEGW1sD65vI3Utt0Vn8agafHke1ejNtdQwNH2dI1_56AdyyC8hJow3Jq1UIMVERoiCOy4dytEB7JukspSdKzznGvBrD23jCq_WKkIbU2iuI4IzZHqlrnSB9hd7a3ZeNbRP4",
    authorFollowers: "2.1M followers",
    category: "Home Decor",
    likes: 3150,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "summer-refreshment-inspo",
    title: "Summer Refreshment Inspo",
    description: "A gorgeous, high-contrast action shot of a fresh lemon slice dropping into sparkling mineral water. Ultimate refreshing vibe.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7tzxeizvyRnpc5JmzyvQdXrw9KbdRibHQaWKPFEs43wkYogR40f9ontO1BQxltZTGWWh-EIyHplP-aoBP8lm__OMMSYRdLnRNids0bOtaBKuc-rLha2caEN4e5fu0b-nKfKNErXcwRgD25jtH5U-IeD3149vyKmo3KiMu3baR7SUrGVuUOhCGU47JUrXaa1seb1Ubjx3HOEP4sCuCRekoMRHLFnRUXTxqsXRO1suFeWDCdz_iT3SFMpvS9sXeTNeqJoFYnL2DSnA",
    authorName: "The Fresh Table",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxm7IEdzRigTVQWGlVORzlwD6I6cIZAVMlS3kRqGoxN1jlQ90Nzgyq9NmGhJoSaoGeA1lnsn0tjq4J4WCcQPX6RSKXC6sy6xya3SwVq_VZ3LJUdoT6_CYRCCxdBlkPeqCfjDgCdMZU_2iHIRrzo6vMZ5qXFJdXBht2UC7szcqKByvXqaIHrhEkyoUrccRgPxhi7zsoBw0w7U5M2pvf2IoRNfjY2ruf_tK18LHRXdtY0O3AmTcxCM3PeRiAjn6S7RPpvcncDvAWUc0",
    authorFollowers: "320k followers",
    category: "Food & Drink",
    likes: 1250,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  },
  {
    id: "rainy-day-reading-nook",
    title: "Rainy Day Reading Nook",
    description: "A cozy, sunlit window nook decorated with a thick knitted wool throw, stacks of books and soft warm background light.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_wgyTT8LA-ZZ_2s-P-DEYJONEG1_P7k4dRbp7XcRqJvjy6WdrfvXaGpZPbnMMfwye-yQprY4twSyDUY6vjJXuIjuXWpTQJ6Dw4fj-oHZMLqelCdw3ecs3oWRRUs1ALSG9mOWiBWggnb6ucbcnD2ZFWLLoo8xLJt-PXOMXyHctV-tJDVWDuH5We_LB8lIqjZ_QzDNSSQOhp-zXGpduoDXPWEgfITjKnHAzhYwO5suer4dLjJ7MKIJclZThM1idxcV7QBsStt8Vp5M",
    authorName: "Voyage",
    authorAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvraAHftcthPrCTsDcHY1GGbgQOdUBsvdf__RYdnR8TOeZ3Q_dgHnIijJSFLago1L0rDkbCWKbgJdmxMFz6st7Ei3Zx5ixce46ZtiEpjxUroYB7kVLanY-bpz28V60N2XfkCeyxhxLxTTiOAhDdgbSzQiLHTzCqQkConCqvjiDzfPqMQPcf84vUc4WtWV8ymQjg_5GrRG6IgMzRFikPelNhHI3DZDg-mV5N5oroMdLMTaE4-Zl-cYBb2iysA4C8nPeusbGcOvZX84",
    authorFollowers: "95k followers",
    category: "Home Decor",
    likes: 3100,
    comments: [],
    likedByUser: false,
    isFollowingAuthor: false
  }
];

export const EXPLORE_IDEAS: ExploreIdea[] = [
  {
    id: "modern-architecture",
    name: "Modern Architecture",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvq-w9I8MLzbMKqWDXgdLuECuq4DePkRLloFTUmeIBWIJbeCYSF7m_WNMf_-xiwD1DehL8ep6yPNSawre4em9fxXB-LfYjwjdzFkSeMN8VwbkKNPP4FuS9roDubHXDLMCpUVBhgAxcu3LwDJfqHKVyOuIHeswoJLnoCJGg6gs1wo5W6V4muVCMqDAYFt70-W2STSNeEhIFi-o7_-nqdz4Wi0wCDhPsS2HWoz-UhG6rd1SxXAo7V4StLhk84Q5KU6tawndQLlGZfrE"
  },
  {
    id: "healthy-eats",
    name: "Healthy Eats",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qZYV1iQca4P0XpNgEIKRwxesnqy4f6n5IOiCjB4UtThFR7HP3NFTBd8gsQcw2tIXfY_cjA7EHZnu5UPk1fEv_gG0jQROuhXWGgnxNoE7N00YP9pT_vNva_Kyo8T3YaxpGCsZrTnypTgzEe-ievVwCrlOKRqFI0D3HUsnvSX5lTVW5_jfOhhXhC1FEDuZbU2zpAExbCP5cQJhYtzh7BpCeMWsoT4oB6qTCwPRwxYJiXl6YTBapYpHC05KGR_2llrsuEEvELqb1YQ"
  },
  {
    id: "sustainable-style",
    name: "Sustainable Style",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9eLHE24AHOtw6iQhO5Og10LrAcMhK_52cLTAPauM_sLT1TU5dkOmZq487jmn3uWyoQ8HXi_HAlFkN1tduN1XF0SnpBYXVnQwCLlN2MntCUXKIwsp69opv1DEDOFVDr2O8UFwTvaVOG7PhdgukcbgfVdFwX5XJ6ZqMJld0CBWdqegErRoo7xmiHzT99q-MIuB0HoQ2cwk_YScLucFXc3XpqpltCsqLc_NnMQUgOnQqu2qWu18Xz8YWzrdv8xfcyNQT6AO4qNojYKo"
  },
  {
    id: "workspace-inspo",
    name: "Workspace Inspo",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNRWkg7cnFx0xUAZ3rR02HaGManipKiHMuqeSoaeHYR1jBZOl8u1yvGrk9LMdz-CMGU38L81mPx1UACYpsnCmJnurqqzyPXgjO5t3FwDk6zmbY4DBlogEOWzGNfQ9xLybRFUdohj3CZpHBEnD_IRenHYm8BGHVFl7nW-9c9Dt4NUA7pJr5-FZHbIeKtmsPHGsKIpZKUjHyui2N-WOcqmuGM5dOBs0WJK5K_g85HHWeg0MvnD4UYETMPQ4ol6-bs1KR1yaxiIT8gIg"
  }
];

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  {
    id: "food-drink",
    name: "Food & Drink",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJbzHBclZFZONKUA6fYcfuNKNbldFIDZ5h1FBflq2lUm-BhinlX0N8s4v_ZLpJ0ViWe3qFHLQ0V2PFybA4SVmKxCfkOM0dNul5W9b8seI0mQ66-RJXmN9wrhTtQuCqwkWabHt8HQfZeAR44GMHOAV4ui7qVcfD3K-iOPrRdGMpUanSqbYWOupEit0rhGvu_hraCjMXzRXwMpJ6Pjpl62lHECp8dI6I0Hj0JIvrnWVRiY7QR3wLqHkrzl5oloT0eu7haoPoI8VdAgs"
  },
  {
    id: "home-decor",
    name: "Home Decor",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtzCLJGTm8NbnGnZwjMH_T2h74hRIYx_G93MsuG8zz_XOZBChy57v1IlIlPL3K1KUzgH-rKAJrff79hxF0oL77GBeKnpsWMImTbHCQDXE6fvms8q_lBq6LLahs53YJSB-O2pab6ohU0aZW4SiW_NuTdAYjKdcor_bD6kCOcLb0Q1LE85WE8I2dIDTJawYS67U0Be7uv2KPbyGRe894iHOJNTfLL0kQrJcbFFLPHL6lD5lxXy1spddrbCklWlcgJqA1sYvfFlUNqsQ"
  },
  {
    id: "style",
    name: "Style",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1mnTl1WPqr7PI0Qhq1lnPU_RS7j3tTh1YjzfcZVwxJJ5LWM08UL29XmZuzQ5yg_nsSIqnnDz0N-RiioK7lxXjewEN5eNv_CKAES2ak2VZ-sWNg5o9Zz6Y7wSxGG9vnOGgjui4efhI0rhkShpkpTDk4jzpxr6LGamIEquCXs8mW6ovHQwDGJ22GbEXYRZB_TcGQkOtzK4VY39ef5D4XvKg65kQiyRS0UQa6GHYrpFnhxuP1r8occa_oxklAgn27QWBkDjH_ygSgmc"
  },
  {
    id: "art",
    name: "Art",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBa_SuEvLw1NBvlFDw33VPnTw4rzYVlzo5-_ydnRI-cUwkKgcp3txfPvLnbT4L2IqDerBCxNljL5zZRTVof_AgqI136dXEeyjtbP99gh4JM-599lFguZo7rAsEvtm92LsyoCzeADoN1xYHPCYVyl43-Nb3hrBwSmiMD3A4kXmmZpufIosgBIT94Jg2VPpiFKpNfVW4hdBeSLcWMC4y1l75vXEZIP3dTnmifGXzu4e1O_b_MemdkGi-nPX67Iwf_8dFefSF_oyYwcGw"
  }
];

export const CURRENT_USER = {
  name: "Creative Mind",
  username: "@creativemind",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgVN48f-iutjqvE_U9daszAcdp9kUe_aKJ-Vmq6Ou09VvYgaYt0SuAoHKsjjFYAM4oOmRqFRYJqDBgKGR523-RIoHh_PA4kLHoPOoEX6n-TNzp-_11dB94KrJ05Q-ohwqhm9wTph65m5DUQxCbgpAdhp4RRACXCJdJ0xCvomy8kqDTjFuapxMbJARVYuXpzXe7tw0R5Ze3K61u22nYl80pr42cfv98m3uzxrsMQiJVr4ZodA5bcndJLLdHLCi-FOxAVRvG7jGbWwM",
  followers: "1.2k",
  following: "340"
};
