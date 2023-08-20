
const SYSTEMS : DithertronSettings[] = [
    {
        id:'c64.multi',
        name:'C-64 Multi',
        width:160,
        height:200,
        scaleX:0.936*2,
        conv:'VICII_Multi_Canvas',
        pal:VIC_PAL_RGB,
        block:{w:4,h:8,colors:4},
        toNative:'exportC64Multi',
    },
    {
        id:'c64.hires',
        name:'C-64 Hires',
        width:320,
        height:200,
        scaleX:0.936,
        conv:'ZXSpectrum_Canvas',
        pal:VIC_PAL_RGB,
        block:{w:8,h:8,colors:2},
        toNative:'exportC64Hires',
    },
    {
        id:'c64.fli',
        name:'C-64 Hires FLI',
        width:320,
        height:200,
        scaleX:0.936,
        conv:'C64HiresFLI_Canvas',
        pal:VIC_PAL_RGB,
        block:{w:8,h:1,colors:2},
        toNative:'exportC64HiresFLI',
    },
    {
        id:'nes',
        name:'NES (4 color, 240 tiles)',
        width:160,
        height:96,
        scaleX:8/7,
        conv:'DitheringCanvas',
        pal:NES_RGB,
        reduce:4,
        toNative:'exportNES',
    },
    {
        id:'msx',
        name:'MSX/Coleco (TMS9918A)',
        width:256,
        height:192,
        conv:'VDPMode2_Canvas',
        pal:TMS9918_RGB,
        block:{w:8,h:1,colors:2},
        toNative:'exportTMS9918',
    },
    {
        id:'apple2.hires',
        name:'Apple ][ Hires',
        width:140,
        height:192,
        scaleX:2,
        conv:'Apple2_Canvas',
        pal:AP2HIRES_RGB,
        block:{w:7,h:1,colors:4},
        toNative:'exportApple2HiresToHGR',
    },
    {
        id:'atari8.d',
        name:'Atari ANTIC D',
        width:160,
        height:96,
        scaleX:0.8571,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:4,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:2,brev:true},
    },
    {
        id:'atari8.f.10',
        name:'Atari ANTIC F/10',
        width:80,
        height:192,
        scaleX:0.8571*4,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:9,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:4,brev:true},
    },
    {
        id:'vcs',
        name:'Atari VCS',
        width:40,
        height:192,
        scaleX:6,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:2,
        toNative:'exportVCSPlayfield',
    },
    {
        id:'vcs.color',
        name:'Atari VCS Color',
        width:40,
        height:192,
        scaleX:6,
        conv:'VCSColorPlayfield_Canvas',
        pal:VCS_RGB,
        toNative:'exportVCSPlayfield',
    },
    {
        id:'astrocade',
        name:'Bally Astrocade',
        width:160,
        height:98,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ASTROCADE_RGB,
        reduce:4,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:2,brev:true},
    },
    {
        id:'zx',
        name:'ZX Spectrum',
        width:256,
        height:192,
        conv:'ZXSpectrum_Canvas',
        pal:ZXSPECTRUM_RGB,
        block:{w:8,h:8,colors:2},
        toNative:'exportZXSpectrum',
    },
    {
        id:'cpc.mode0',
        name:'Amstrad CPC (mode 0)',
        width:160,
        height:200,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:AMSTRAD_CPC_RGB,
        reduce:16,
        toNative:'exportFrameBuffer',
        exportFormat:{ bpp:4, yremap:[3,80,2048], bitremap:[7,3,5,1,6,2,4,0] }
    },
    {
        id:'cpc.mode1',
        name:'Amstrad CPC (mode 1)',
        width:320,
        height:200,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:AMSTRAD_CPC_RGB,
        reduce:4,
        toNative:'exportFrameBuffer',
        exportFormat:{ bpp:2, yremap:[3,80,2048], bitremap:[7,3,6,2,5,1,4,0] }
    },

    null,
    
    {
        id:'nes4f',
        name:'NES (4 color, full screen)',
        width:256,
        height:240,
        scaleX:8/7,
        conv:'DitheringCanvas',
        pal:NES_RGB,
        reduce:4,
        toNative:'exportNES',
    },
    {
        id:'nes5f',
        name:'NES (5 color, full screen)',
        width:256,
        height:240,
        scaleX:8/7,
        conv:'NES_Canvas',
        pal:NES_RGB,
        reduce:5,
        toNative:'exportNES',
    },
    {
        id:'atari7800.160a',
        name:'Atari 7800 (160A)',
        width:160,
        height:240,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:4,
    },
    {
        id:'atari7800.160b',
        name:'Atari 7800 (160B)',
        width:160,
        height:240,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:VCS_RGB,
        reduce:12,
    },
    {
        id:'sms',
        name:'Sega Master System',
        width:176, // only 488 unique tiles max, otherwise 256x240
        height:144,
        scaleX:8/7,
        conv:'DitheringCanvas',
        pal:SMS_RGB,
        reduce:16,
    },
    {
        id:'sms-gg',
        name:'Sega GameGear',
        width:160,
        height:144,
        scaleX:1.2,
        conv:'DitheringCanvas',
        pal:GAMEGEAR_COLOR_RGB,
        reduce:16,
    },
    {
        id:'bbcmicro.mode2',
        name:'BBC Micro (mode 2)',
        width:160,
        height:256,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:TELETEXT_RGB,
    },
    {
        id:'apple2.dblhires',
        name:'Apple ][ Double-Hires',
        width:140,
        height:192,
        scaleX:2,
        conv:'DitheringCanvas',
        pal:AP2LORES_RGB,
    },
    {
        id:'apple2.lores',
        name:'Apple ][ Lores',
        width:40,
        height:48,
        scaleX:1.5,
        conv:'DitheringCanvas',
        pal:AP2LORES_RGB,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:4},
    },
    {
        id:'appleiigs.320.16',
        name:'Apple IIGS (16 colors)',
        width:320,
        height:200,
        conv:'DitheringCanvas',
        pal:IIGS_COLOR_RGB,
        reduce:16,
    },
    {
        id:'channelf',
        name:'Fairchild Channel F',
        width:102,
        height:58,
        conv:'DitheringCanvas',
        pal:CHANNELF_RGB,
        reduce:4, // TODO: https://geeks-world.github.io/articles/467811/index.html
    },
    {
        id:'mac',
        name:'Mac 128K',
        width:512,
        height:342,
        conv:'DitheringCanvas',
        pal:MONO_RGB,
    },
    {
        id:'x86.cga.04h.1',
        name:'PC CGA Mode 04h (palette 1)',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_1,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.cga.04h.1B',
        name:'PC CGA Mode 04h (bright 1)',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_1H,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.cga.04h.2',
        name:'PC CGA Mode 04h (palette 2)',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_2,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.cga.04h.2B',
        name:'PC CGA Mode 04h (bright 2)',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_2H,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.cga.05h',
        name:'PC CGA Mode 05h',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_3,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.cga.05h.B',
        name:'PC CGA Mode 05h (bright)',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB_3H,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:2},
    },
    {
        id:'x86.ega.0dh',
        name:'PC EGA Mode 0Dh',
        width:320,
        height:200,
        scaleX:200/320*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:4},
    },
    {
        id:'x86.ega.10h',
        name:'PC EGA Mode 10h',
        width:640,
        height:350,
        scaleX:350/640*1.37,
        conv:'DitheringCanvas',
        pal:CGA_RGB,
        toNative:'exportFrameBuffer',
        exportFormat:{bpp:1,np:4},
    },
    {
        id:'williams',
        name:'Williams Arcade',
        width:304,
        height:256,
        conv:'DitheringCanvas',
        pal:WILLIAMS_RGB,
        reduce:16,
    },
    {
        id:'pico8',
        name:'PICO-8',
        width:128,
        height:128,
        conv:'DitheringCanvas',
        pal:PICO8_RGB,
    },
    {
        id:'tic80',
        name:'TIC-80',
        width:240,
        height:136,
        conv:'DitheringCanvas',
        pal:TIC80_RGB,
    },
    {
        id:'gb',
        name:'Game Boy Classic',
        width:160,
        height:144,
        scaleX:10/9,
        conv:'DitheringCanvas',
        pal:GAMEBOY_GREEN_RGB,
    },
    /*
    {
        id:'gbc',
        name:'Game Boy Color',
        width:160,
        height:144,
        aspect:1,
        conv:'DitheringCanvas',
        pal:GAMEBOY_COLOR_RGB,
        reduce:32,
    },
    */
    {
        id:'amiga.lores',
        name:'Amiga Lores',
        width:320,
        height:256,
        conv:'DitheringCanvas',
        pal:AMIGA_OCS_COLOR_RGB,
        reduce:32,
        //toNative:'exportFrameBuffer',
        //exportFormat:{bpp:1,brev:true,np:5},
    },
    {
        id:'amiga.lores.ham6',
        name:'Amiga Lores HAM6',
        width:320,
        height:256,
        conv:'HAM6_Canvas',
        pal:AMIGA_OCS_COLOR_RGB,
        reduce:16,
        extraColors:48,
        //toNative:'exportFrameBuffer',
        //exportFormat:{bpp:1,brev:true,np:6},
    },
    {
        id:'cx16.lores',
        name:'Commander X16 Lores',
        width:320,
        height:240,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:AMIGA_OCS_COLOR_RGB,
        reduce:256
    },
    {
        id:'cx16.hires',
        name:'Commander X16 Hires (cropped)',
        width:640,
        height:400,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:AMIGA_OCS_COLOR_RGB,
        reduce:16
    },
    {
        id:'compucolor',
        name:'Compucolor',
        width:160,
        height:192,
        scaleX:1.6,
        conv:'Compucolor_Canvas',
        pal:ZXSPECTRUM_RGB,
        block:{w:2,h:4,colors:2},
    },
    // https://www.bighole.nl//pub/mirror/homepage.ntlworld.com/kryten_droid/teletext/spec/teletext_spec_1974.htm
    {
        id:'teletext',
        name:'Teletext',
        width:40*2,
        height:24*3,
        scaleX:4/3,
        conv:'Teletext_Canvas',
        pal:TELETEXT_RGB,
        block:{w:2,h:3,colors:2},
    },
    {
        id:'atarist',
        name:'Atari ST',
        width:320,
        height:200,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ATARIST_RGB,
        reduce:16
    },
    {
        id:'ataristfh',
        name:'Atari ST (opened top+bottom)',
        width:320,
        height:280,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ATARIST_RGB,
        reduce:16
    },
    {
        id:'ataristfs',
        name:'Atari ST (fullscreen)',
        width:408,
        height:273,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ATARIST_RGB,
        reduce:16
    },
    {
        id:'ataristfshs',
        name:'Atari ST (fullscreen hardscroll)',
        width:408,
        height:265,
        scaleX:1,
        conv:'DitheringCanvas',
        pal:ATARIST_RGB,
        reduce:16
    },
];
var SYSTEM_LOOKUP = {};
SYSTEMS.forEach((sys) => { if (sys) SYSTEM_LOOKUP[sys.id||sys.name] = sys; });

