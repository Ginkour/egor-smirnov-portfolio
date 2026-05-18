export const data = {
	image_gallery_path: "../gallery/projects/",
	player_arguments: "autoplay=1&mute=1&rel=0&modestbranding=1&iv_load_policy=3&loop=0",
	video_hosting_link: "https://www.youtube.com/embed/",
	base_project_preview_path: "../gallery/previews/",
	default_project_preview: "default_preview.png",
	skills: {
		"Graphics APIs & Rendering": ["Vulkan", "PS5 AGC", "DirectX 11", "OpenGL", "HLSL", "GLSL", "PSSL"],
		"Real-Time Systems": ["Multithreading", "GPU programming", "SIMD optimisation", "memory management", "performance profiling"],
		"Programming Languages": ["C", "C++17/C++20", "C#", "Lua scripting integration", "custom engine systems"],
		"Development Tools": ["Visual Studio", "RenderDoc", "debugging & profiling tools", "build systems (MSBuild)"],
		"Game Engines": ["Unity 5", "Unreal Engine 5(Familiarity with BluePrints)"],
	},
	education:
	{
		degree: "MSc Computer Science for Games 2022 - 2026",
		classification: "First Class Honours",
		university: "Sheffield Hallam University ",
		university_link: "https://www.shu.ac.uk/",
		highlights: [
			"Focused on rendering and engine systems, console game development for PS5 with groupwork.",
			"Coursework includes: graphics, real-time rendering, compute-shaders, low-level programming, proprietary console development on PS5"
		]
	},
	about: [`
			I am specialising in graphics and engine programming. Experienced in developing real-time rendering systems and low-level engine architecture using C++, Vulkan, DirectX 11, PS5 AGC, and OpenGL. Strong background in GPU programming, compute shaders, deferred rendering, multithreading, SIMD optimisation, and low-level graphics API resource management.`,
			`
			My most recent notable project is deferred renderer with weighted blended order-independent transparency (WBOIT) implementation in Vulkan, this project was nominated in Best Research/Steel Minions/Special Project Category at Sheffield Hallam University Game Over 26 event and received an honourable mention from judges. This project has also been nominated for Game Republic Student Showcase 2026 event at University of Salford.`,
			`
			I am Interested in graphics programming, rendering architecture, performance optimisation, and modern engine development.`
		],
	contact: {
		email: 		"egsmiroff@gmail.com",
		linkedin: "https://www.linkedin.com/in/egor-smirnov-ab227a279/",
		cv: 			"https://drive.google.com/file/d/1bMBuG7RuyG8k6Bf7V52NN7h6t1CjR_wk/",
		github: 	"https://github.com/Ginkour/",
		phone: 		"+4407936623559",
		name: 		"Egor Smirnov",
		specialities: ["Graphics", "Engine&Tools", "Gameplay"],
		shiny_skills: ["Vulkan", "PS5 AGC", "DirectX 11", "OpenGL", "GLSL", "HLSL", "PSSL"],
		location: 		"Sheffield, United Kingdom",
	},
	projects: [
		{
			title: "Order Independent Transparency & Deferred Rendering in Vulkan",
			timeframe: "March 2026 - April 2026",
			summary:
				"Custom Vulkan based deferred renderer with Order Independent Transparency Implementation",
			tech: [
				"C++",
				"Vulkan",
				"GLSL",
				"Deferred Rendering",
				"OIT",
				"WBOIT",
				"Shadows",
			],
			preview: "wboit-look.gif",
			gallery: ["wboit-sign.jpg", "wboit-nomination-table.jpg"],
		
			highlights: [
				"Deferred rendering pipeline",
				"Weighted blended order-independent transparency (WBOIT) for real-time transparent object rendering without depth sorting",
				"Abstraction systems over Vulkan",
				"Bindless rendering with descriptor indexing",
				"Static shadow mapping",
			],
		
			description_paragraphs: [
				`This project is a custom Vulkan renderer built in C++ featuring deferred rendering, weighted blended order-independent transparency (WBOIT), shadow mapping, and fully explicit GPU resource management. The renderer uses multiple G-buffer render targets to store scene data such as albedo, normals, before performing fullscreen lighting and post-processing passes. Traditional render passes from core vulkan were replaced with dynamic rendering extension implementation.`,
			
				`A major focus of the project was transparency rendering using weighted blended OIT techniques. The engine accumulates transparent surfaces into dedicated render targets without requiring expensive object sorting.`,
			
				`Additional systems include shadow map generation, runtime shader and texture management, descriptor set abstraction systems, GPU staging buffers`,
			],
		
			links: {
				video: "8eyNf285UN0",
				executable: "https://drive.google.com/file/d/1DLpjiZzqzPQCqYNXGUxeRwnhWK1sENJL/",
				presentation: "https://docs.google.com/presentation/d/171WNYncfF7dTUkG2NtpfY-9tVVlUiczf/edit?usp=drive_link&ouid=106066398032300991200&rtpof=true&sd=true",
			},
		},
		{
			title: "GPU-Compute Particle System in Vulkan",
			timeframe: "October 2025 - December 2025",
			summary:
				"GPU-driven particle simulation and rendering system built in C++ and Vulkan using compute shaders, storage buffers, 		descriptor set management, and asynchronous compute/graphics synchronization.",
			tech: [
				"C++",
				"Vulkan",
				"GLSL",
				"Compute Shaders",
				"ImGui"
			],
			preview: "vkcomp-particles.gif",
			highlights: [
				"Developed a fully GPU-driven particle simulation pipeline using Vulkan compute shaders",
				"Ping-pong buffering to avoid read/write hazards between compute and graphics stages",
				"Explicit synchronization between graphics and compute queues",
				"Compute-based particle spawning, velocity, gravity, lifetime, and color interpolation",
				"Custom packed particle memory layouts to reduce gpu memory footprint",
				"ImGui-based runtime configuration of compute shaders, with frametime metrics",
			],
		
			challenges: [
				"Synchronizing Compute and Graphics queues' workloads",
				"Preventing GPU read/write hazards",
				"Vertex shader based particle culling",
				"Building reusable abstractions while preserving explicit control"
			],
		
			description_paragraphs: [
				`This project is a GPU-driven particle simulation and rendering system developed from scratch in C++ using Vulkan and GLSL compute shaders. The project focused heavily on low-level graphics programming, explicit GPU synchronization, memory management, and parallel compute workloads.`,
				`Particle simulation is performed entirely on the GPU using Vulkan compute shaders and storage buffer objects. The system 		uses a ping-pong buffering architecture where particle data from the previous frame is read while the current frame writes 		updated particle state into a separate buffer set, preventing read/write hazards during simulation and rendering.`,
				`The renderer supports over one million active particles in real time and includes GPU-based spawning, velocity 		integration, gravity simulation, lifetime updates, and dynamic color interpolation. Particle data was packed into optimized memory layouts to reduce bandwidth usage and improve overall GPU efficiency.`,
				`A major focus of the project was explicit Vulkan synchronization and resource management. Compute and graphics workloads 		are synchronized manually using semaphores, command buffers, descriptor sets, pipeline layouts, and pipeline stage dependencies across frames-in-flight.`,
				`Additional systems include runtime particle editing through ImGui, frametime graph visualization, custom shader loading systems, descriptor pool management, and fully custom Vulkan graphics and compute pipeline creation architecture.`,
			],
		
			links: {
				video: "HAVoHng3oiQ",
				executable: "https://drive.google.com/file/d/1jBKwt_NASVQXelRwA0sLlDnlS6I4jQ8c/",
			},
		},
		{
			title: "Voxel Game",
			timeframe: "November 2023 - December 2023",
			summary: "A Minecraft-inspired voxel engine and sandbox game built from scratch in C++ using DirectX 11 and HLSL, featuring infinite procedural terrain generation, multithreaded chunk systems, and optimized mesh rendering.",
			tech: ["C++", "DirectX11/HLSL", "Multi-Threading", "Git", "FMOD"],
			preview: "voxel-game.gif",
			gallery: [ "voxel-pausemenu.png", "voxel-game.png", "voxel-settings.png"],
			highlights: [
				"Built a multithreaded chunk generation system that generates and meshes terrain around the player in real time",
				"Implemented infinite procedural voxel terrain with coordinate normalization to support rendering far from world origin",
				"Developed optimized chunk mesh generation with hidden-face culling to significantly reduce rendered geometry",
				"Created a dynamic face-tracking mesh update system that avoids rebuilding entire chunks after block modifications",
				"Implemented block placement and destruction gameplay systems",
				"Wrote custom HLSL shaders and shader data packing systems for rendering optimization",
				"Implemented directional lighting with basic shadow shading",
				"Developed player movement systems including gravity, collision handling, and normalized movement",
				"Created UI systems using abstract classes and interface-based C++ architecture",
				"Implemented background music, gameplay audio, and interactive UI systems",
				"Developed early procedural cave generation systems",
				"Designed and developed the entire project independently",
			],
			description_paragraphs: [
				`Voxel Game is a Minecraft-inspired sandbox and voxel engine developed entirely from scratch in C++ using DirectX 11 and HLSL. The project focuses heavily on rendering performance, procedural world generation, and low-level engine programming.`,
				`The engine features an infinite procedurally generated world where chunks are dynamically generated and meshed around the player using a separate worker thread. To support exploration far away from the world origin, the engine uses coordinate normalization techniques to maintain floating-point precision and rendering stability.`,
				`A major focus of the project was chunk and mesh optimization. Hidden voxel faces are culled during mesh generation, and chunk updates never rebuild meshes from scratch. Instead, a custom dynamic face-tracking system updates only modified faces by efficiently swapping mesh data, significantly reducing rebuild costs during block placement and destruction.`,
				`The rendering pipeline was built using DirectX 11 with custom-written HLSL shaders, shader buffer packing, and basic directional shadow lighting. Additional gameplay systems include block interaction, gravity, collision handling, procedural cave generation, UI systems, and audio integration.`,
				`This project was developed entirely solo and served as a large-scale exploration of graphics programming, engine architecture, multithreading, and real-time optimization techniques in modern C++.`,
			],
			links: {
				video: "3jyTWQ-uA74",
				executable: "https://drive.google.com/file/d/1ZtTLeJaMisQthVd6gvfs_HzWeeWGB0Yl/",
			},
		},
		{
			title: "Pacman Clone",
			timeframe: "Decemeber 2022 - February 2023",
			summary: "My first game project written in C++, inspired by the classic arcade game Pac-Man.",
			tech: ["C++", "MySQL", "SFML", "Git"],
			preview: "pacman-gameplay.gif",
			highlights: [
				"Implemented local MySQL database storage for high scores",
				"Created dynamic maze generation using .png-based tile mapping and sprite generation",
				"Integrated audio effects and gameplay feedback systems",
				"Built game state management for menus, gameplay, scoring, and level progression",
				"Implemented sprite animations and frame-based rendering using SFML",
				"Handled keyboard input and gamepad input switch",
			],
			description_paragraphs: [
				`This project was created several months into learning C++ and programming in general, making it my first complete software project. It helped me develop foundational skills in problem-solving, game logic, and object-oriented programming.`,
				`The game is a 2D arcade-style maze game where the player navigates through levels while being chased by four enemy ghosts. Players collect pills and bonus fruits to increase their score and progress through levels. Special power pills temporarily allow the player to turn the tables and consume enemies for additional points.`,
				`On your way you eat pills to progress to the next levels and score points by eating extra bonus-fruits. The maze contains special pill that will boost player ability to chase and turn tables against ghost, giving temporary ability to consume them.`,
				`The game stores player score into a local data base making it possible to compete with other players through highest score.`,
			],
			links: {
				video: "ilR6nmyGh5o",
				executable: "https://drive.google.com/file/d/11bKuP-znBYinkatm4QLlX6nOoO0Nth1m/",
			},
		},
		{
			title: "Plague Doctor",
			timeframe: "February 2023 - April 2023",
			summary: "Group project",
			tech: ["Unity", "C#", "Trello", "Git"],
			gallery: [],
			contributions: [
				"Developed the player inventory and item pickup systems",
				"Created and implemented all player and enemy animations",
				"Designed AI behaviours including enemy attack and fear responses",
				"Implemented core player mechanics including movement, melee combat, equipment, and torch protection systems",
				"Collaborated using Trello for task management and GitHub for version control"
			],
			description_paragraphs: [
				`Plague Doctor was a group-developed medieval RPG platformer built in Unity. The game focused on exploration, combat, and curing infected patients while surviving enemy rat encounters throughout the map.`,
				`My primary responsibilities included gameplay programming, animation implementation, AI behaviour systems, and player mechanics. This project helped strengthen my experience with collaborative development workflows, version control, and task planning in a team environment.`,
				`Although the final scope differed from the original vision due to time and collaboration constraints, the project provided valuable experience working within a multidisciplinary team and adapting features during development.`,
			],
			links: {
				video: "gTlTUn17i4k",
				executable: "https://drive.google.com/file/d/115fFd2ecWArbx5HKh35OJt9vbTFA-JRk/",
			},
		},
		{
			title: "Other Projects",
			timeframe: "September 2022 - May 2026",
			summary: "Other unlisted projects",
			tech: ["C++", "OpenAL", "C#", "OpenGL", "DirectX12", "Git"],
			gallery: [],
			description_paragraphs: [
				`Developed a lightweight OpenAL-based audio engine in C++ with asynchronous audio loading and sound source management 		systems.`,
					
				`Built an MSDF font generation and rendering toolchain using msdfgen and msdf-atlas-gen, including custom metadata 		generation and a header-only runtime loader library.`,
					
				`Implemented a custom std::vector-style dynamic container in modern C++ with allocator-aware memory management, move 		semantics, iterators, and Rule of Five support.`,
					
				`Created a multithreaded OpenGL particle simulation and rendering system using custom shader-based circle rendering, 		frustum culling, and cache-friendly particle layouts.`,
					
				`Developed an OpenGL port of a previously built DirectX 11 voxel engine to explore rendering API abstraction and cross-API 		rendering workflows.`,
					
				`Currently studying DirectX 12 graphics programming and modern explicit GPU resource management techniques.`
			],
			links: {
			},
		},
	],
};