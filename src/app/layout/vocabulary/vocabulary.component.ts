import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-vocabulary',
    templateUrl: './vocabulary.component.html',
    styleUrls: ['./vocabulary.component.scss']
})
export class VocabularyComponent implements OnInit {
    constructor() {}

    vocabList = [
        {
            category: 'General',
            term: 'General',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'General',
            term: '[ ]',
            definition: 'work instructions within brackets as many times as directed',
            link: '',
            style: 'term'
        },
        {
            category: 'General',
            term: '( )',
            definition: 'work instructions within parentheses as many times as directed',
            link: '',
            style: 'term'
        },
        {
            category: 'General',
            term: '*',
            definition: 'repeat the instructions following the single asterisk as directed',
            link: '',
            style: 'term'
        },
        {
            category: 'General',
            term: '**',
            definition: 'repeat instructions between asterisks as many times as directed or repeat from a given set of instructions',
            link: '',
            style: 'term'
        },
        {
            category: 'General',
            term: '"',
            definition: 'inch(es)',
            link: '',
            style: 'term'
        },
        {
            category: 'A',
            term: 'A',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'A',
            term: 'alt',
            definition: 'alternate',
            link: '',
            style: 'term'
        },
        {
            category: 'A',
            term: 'approx',
            definition: 'approximately',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'B',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'B',
            term: 'beg',
            definition: 'begin, beginning',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'bet',
            definition: 'between',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'bk2tog',
            definition: 'brioche knit 2 together; knit next knit stitch together with its paired yarnover',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'bk3tog',
            definition: 'right-slanting brioche decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'bp2tog',
            definition: 'brioche purl 2 together; purl next purl stitch together with its paired yarnover',
            link: '',
            style: 'term'
        },
        {
            category: 'B',
            term: 'bsk2p',
            definition: 'left-slanting brioche decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'C',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'C',
            term: 'cable',
            definition: 'a decorative stitch that looks like a twisted rope or braid',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'CC',
            definition: 'contrast color',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'cco',
            definition: 'cable cast on',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'cm',
            definition: 'centimeter(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'cn',
            definition: 'cable needle',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'CO',
            definition: 'cast on',
            link: '',
            style: 'term'
        },
        {
            category: 'C',
            term: 'cont',
            definition: 'continue',
            link: '',
            style: 'term'
        },
        {
            category: 'D',
            term: 'D',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'D',
            term: 'dec',
            definition: 'decrease, decreases, decreasing',
            link: '',
            style: 'term'
        },
        {
            category: 'D',
            term: 'dpn',
            definition: 'double pointed needles',
            link: '',
            style: 'term'
        },
        {
            category: 'F',
            term: 'F',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'F',
            term: 'fl',
            definition: 'front loop(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'F',
            term: 'foll',
            definition: 'follow, follows, following',
            link: '',
            style: 'term'
        },
        {
            category: 'G',
            term: 'G',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'G',
            term: 'g',
            definition: 'gram(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'I',
            term: 'I',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'I',
            term: 'inc',
            definition: 'increase, increases, increasing',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'K',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'K',
            term: 'k or K',
            definition: 'knit',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'k1b'  ,
            definition: 'knit 1 below',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'k1fb',
            definition: 'knit one front and back; a single-stitch increase',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'k2tog',
            definition: 'knit 2 stitches together; a right-slanting, single-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'kitchener stitch',
            definition: 'method of grafting lives stitches together',
            link: '',
            style: 'term'
        },
        {
            category: 'K',
            term: 'kwise',
            definition: 'knitwise',
            link: '',
            style: 'term'
        },
        {
            category: 'L',
            term: 'L',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'L',
            term: 'LH',
            definition: 'left hand',
            link: '',
            style: 'term'
        },
        {
            category: 'L',
            term: 'lp(s)',
            definition: 'loop(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'M',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'M',
            term: 'm',
            definition: 'meter(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'M1',
            definition: 'make 1 stitch',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'm1L',
            definition: 'make 1 left; left-slanting, single-stitch increase',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'm1R',
            definition: 'make 1 right; right-slanting, single-stitch increase',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'M1 p-st',
            definition: 'make 1 purl stitch',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'MC',
            definition: 'main color',
            link: '',
            style: 'term'
        },
        {
            category: 'M',
            term: 'mm',
            definition: 'millimeter(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'O',
            term: 'O',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'O',
            term: 'oz',
            definition: 'ounce(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'P',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'P',
            term: 'p or P',
            definition: 'purl',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'p tbl',
            definition: 'purl through the back loop',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'p1b',
            definition: 'purl 1 below',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'p2tog',
            definition: 'purl 2 stitches together; a single-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'p2tog tbl',
            definition: 'purl 2 stitches together through the back loops; also known as​ ssp; an one-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'patt(s)',
            definition: 'pattern(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'pm',
            definition: 'place marker',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'pop',
            definition: 'popcorn',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'prev',
            definition: 'previous',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'psso',
            definition: 'pass slipped stitch over',
            link: '',
            style: 'term'
        },
        {
            category: 'P',
            term: 'pwise',
            definition: 'purlwise',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'R',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'R',
            term: 'rem',
            definition: 'remain, remaining',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'rep(s)',
            definition: 'repeat(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'rev St st',
            definition: 'reverse stockinette stitch',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'RH',
            definition: 'right hand',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'rnd(s)',
            definition: 'round(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'R',
            term: 'RS',
            definition: 'right side',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'S',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'S',
            term: 's2kp',
            definition: 'slip 2 together knitwise, k1, pass slipped stitches over (psso); a centered two-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sk',
            definition: 'skip',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sk2p',
            definition: 'slip 1, knit 2 together, pass slip stitch over (psso), then knit 2 together; a two-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'skp',
            definition: 'slip, knit, pass stitch over; a single-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sl',
            definition: 'slip',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sl st',
            definition: 'slip stitch(es)',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sl1k',
            definition: 'slip 1 knitwise',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sl1p',
            definition: 'slip 1 purlwise',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sl1, k1, ppso',
            definition: 'slip one, knit one, pass slipped stitch over; a single-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'ssk',
            definition: 'slip, slip, knit these 2 stitches together; a left-slanting, single-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'ssp',
            definition: 'slip, slip, purl; one-stitch decrease; also known as p2tog tbl',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'sssk',
            definition: 'slip, slip, slip, knit these 3 stitches together; a left-slanting, two-stitch decrease',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'st(s)',
            definition: 'stitch(es)',
            link: '',
            style: 'term'
        },
        {
            category: 'S',
            term: 'St st',
            definition: 'stockinette stitch, stocking stitch',
            link: '',
            style: 'term'
        },
        {
            category: 'T',
            term: 'T',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'T',
            term: 'tbl',
            definition: 'through back loop',
            link: '',
            style: 'term'
        },
        {
            category: 'T',
            term: 'tog',
            definition: 'together',
            link: '',
            style: 'term'
        },
        {
            category: 'W',
            term: 'W',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'W',
            term: 'WS',
            definition: 'wrong side',
            link: '',
            style: 'term'
        },
        {
            category: 'W',
            term: 'wyib',
            definition: 'with yarn in back',
            link: '',
            style: 'term'
        },
        {
            category: 'W',
            term: 'wyif',
            definition: 'with yarn in front',
            link: '',
            style: 'term'
        },
        {
            category: 'Y',
            term: 'Y',
            definition: '',
            link: '',
            style: 'bold'
        },
        {
            category: 'Y',
            term: 'yd(s)',
            definition: 'yard(s)',
            link: '',
            style: 'term'
        },
        {
            category: 'Y',
            term: 'yf or yfwd',
            definition: 'yarn forward',
            link: '',
            style: 'term'
        },
        {
            category: 'Y',
            term: 'yo',
            definition: 'yarn over',
            link: '',
            style: 'term'
        },
        {
            category: 'Y',
            term: 'yrn',
            definition: 'yarn around needle',
            link: '',
            style: 'term'
        },
        {
            category: 'Y',
            term: 'yon',
            definition: 'yarn over needle',
            link: '',
            style: 'term'
        }

    ];







/*

{
    category: 'General',
    term: 'General',
    definition: '',
    link: ''
},
{
    category: 'General',
    term: '[ ]',
    definition: 'work instructions within brackets as many times as directed',
    link: ''
},
{
    category: 'General',
    term: '( )',
    definition: 'work instructions within parentheses as many times as directed',
    link: ''
},
{
    category: 'General',
    term: '*',
    definition: 'repeat the instructions following the single asterisk as directed',
    link: ''
},
{
    category: 'General',
    term: '**',
    definition: 'repeat instructions between asterisks as many times as directed or repeat from a given set of instructions',
    link: ''
},
{
    category: 'General',
    term: '"',
    definition: 'inch(es)',
    link: ''
},
{
    category: 'A',
    term: 'A',
    definition: '',
    link: ''
},
{
    category: 'A',
    term: 'alt',
    definition: 'alternate',
    link: ''
},
{
    category: 'A',
    term: 'approx',
    definition: 'approximately',
    link: ''
},
{
    category: 'B',
    term: 'B',
    definition: '',
    link: ''
},
{
    category: 'B',
    term: 'beg',
    definition: 'begin, beginning',
    link: ''
},
{
    category: 'B',
    term: 'bet',
    definition: 'between',
    link: ''
},
{
    category: 'B',
    term: 'bk2tog',
    definition: 'brioche knit 2 together; knit next knit stitch together with its paired yarnover',
    link: ''
},
{
    category: 'B',
    term: 'bk3tog',
    definition: 'right-slanting brioche decrease',
    link: ''
},
{
    category: 'B',
    term: 'bp2tog',
    definition: 'brioche purl 2 together; purl next purl stitch together with its paired yarnover',
    link: ''
},
{
    category: 'B',
    term: 'bsk2p',
    definition: 'left-slanting brioche decrease',
    link: ''
},
{
    category: 'C',
    term: 'C',
    definition: '',
    link: ''
},
{
    category: 'C',
    term: 'cable',
    definition: 'a decorative stitch that looks like a twisted rope or braid',
    link: ''
},
{
    category: 'C',
    term: 'CC',
    definition: 'contrast color',
    link: ''
},
{
    category: 'C',
    term: 'cco',
    definition: 'cable cast on',
    link: ''
},
{
    category: 'C',
    term: 'cm',
    definition: 'centimeter(s)',
    link: ''
},
{
    category: 'C',
    term: 'cn',
    definition: 'cable needle',
    link: ''
},
{
    category: 'C',
    term: 'CO',
    definition: 'cast on',
    link: ''
},
{
    category: 'C',
    term: 'cont',
    definition: 'continue',
    link: ''
},
{
    category: 'D',
    term: 'D',
    definition: '',
    link: ''
},
{
    category: 'D',
    term: 'dec',
    definition: 'decrease, decreases, decreasing',
    link: ''
},
{
    category: 'D',
    term: 'dpn',
    definition: 'double pointed needles',
    link: ''
},
{
    category: 'F',
    term: 'F',
    definition: '',
    link: ''
},
{
    category: 'F',
    term: 'fl',
    definition: 'front loop(s)',
    link: ''
},
{
    category: 'F',
    term: 'foll',
    definition: 'follow, follows, following',
    link: ''
},
{
    category: 'G',
    term: 'G',
    definition: '',
    link: ''
},
{
    category: 'G',
    term: 'g',
    definition: 'gram(s)',
    link: ''
},
{
    category: 'I',
    term: 'I',
    definition: '',
    link: ''
},
{
    category: 'I',
    term: 'inc',
    definition: 'increase, increases, increasing',
    link: ''
},
{
    category: 'K',
    term: 'K',
    definition: '',
    link: ''
},
{
    category: 'K',
    term: 'k or K',
    definition: 'knit',
    link: ''
},
{
    category: 'K',
    term: 'k1b,
    definition: 'knit 1 below',
    link: ''
},
{
    category: 'K',
    term: 'k1fb,
    definition: 'knit one front and back; a single-stitch increase',
    link: ''
},
{
    category: 'K',
    term: 'k2tog,
    definition: 'knit 2 stitches together; a right-slanting, single-stitch decrease',
    link: ''
},
{
    category: 'K',
    term: 'kitchener stitch',
    definition: 'method of grafting lives stitches together',
    link: ''
},
{
    category: 'K',
    term: 'kwise',
    definition: 'knitwise',
    link: ''
},
{
    category: 'L',
    term: 'L',
    definition: '',
    link: ''
},
{
    category: 'L',
    term: 'LH',
    definition: 'left hand',
    link: ''
},
{
    category: 'L',
    term: 'lp(s)',
    definition: 'loop(s)',
    link: ''
},
{
    category: 'M',
    term: 'M',
    definition: '',
    link: ''
},
{
    category: 'M',
    term: 'm',
    definition: 'meter(s)',
    link: ''
},
{
    category: 'M',
    term: 'M1',
    definition: 'make 1 stitch',
    link: ''
},
{
    category: 'M',
    term: 'm1L',
    definition: 'make 1 left; left-slanting, single-stitch increase',
    link: ''
},
{
    category: 'M',
    term: 'm1R',
    definition: 'make 1 right; right-slanting, single-stitch increase',
    link: ''
},
{
    category: 'M',
    term: 'M1 p-st',
    definition: 'make 1 purl stitch',
    link: ''
},
{
    category: 'M',
    term: 'MC',
    definition: 'main color',
    link: ''
},
{
    category: 'M',
    term: 'mm',
    definition: 'millimeter(s)',
    link: ''
},
{
    category: 'O',
    term: 'O',
    definition: '',
    link: ''
},
{
    category: 'O',
    term: 'oz',
    definition: 'ounce(s)',
    link: ''
},
{
    category: 'P',
    term: 'P',
    definition: '',
    link: ''
},
{
    category: 'P',
    term: 'p or P',
    definition: 'purl',
    link: ''
},
{
    category: 'P',
    term: 'p tbl',
    definition: 'purl through the back loop',
    link: ''
},
{
    category: 'P',
    term: 'p1b',
    definition: 'purl 1 below',
    link: ''
},
{
    category: 'P',
    term: 'p2tog',
    definition: 'purl 2 stitches together; a single-stitch decrease',
    link: ''
},
{
    category: 'P',
    term: 'p2tog tbl',
    definition: 'purl 2 stitches together through the back loops; also known as​ ssp; an one-stitch decrease',
    link: ''
},
{
    category: 'P',
    term: 'patt(s)',
    definition: 'pattern(s)',
    link: ''
},
{
    category: 'P',
    term: 'pm',
    definition: 'place marker',
    link: ''
},
{
    category: 'P',
    term: 'pop',
    definition: 'popcorn',
    link: ''
},
{
    category: 'P',
    term: 'prev',
    definition: 'previous',
    link: ''
},
{
    category: 'P',
    term: 'psso',
    definition: 'pass slipped stitch over',
    link: ''
},
{
    category: 'P',
    term: 'pwise',
    definition: 'purlwise',
    link: ''
},
{
    category: 'R',
    term: 'R',
    definition: '',
    link: ''
},
{
    category: 'R',
    term: 'rem',
    definition: 'remain, remaining',
    link: ''
},
{
    category: 'R',
    term: 'rep(s)',
    definition: 'repeat(s)',
    link: ''
},
{
    category: 'R',
    term: 'rev St st',
    definition: 'reverse stockinette stitch',
    link: ''
},
{
    category: 'R',
    term: 'RH',
    definition: 'right hand',
    link: ''
},
{
    category: 'R',
    term: 'rnd(s)',
    definition: 'round(s)',
    link: ''
},
{
    category: 'R',
    term: 'RS',
    definition: 'right side',
    link: ''
},
{
    category: 'S',
    term: 'S',
    definition: '',
    link: ''
},
{
    category: 'S',
    term: 's2kp',
    definition: 'slip 2 together knitwise, k1, pass slipped stitches over (psso); a centered two-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'sk',
    definition: 'skip',
    link: ''
},
{
    category: 'S',
    term: 'sk2p',
    definition: 'slip 1, knit 2 together, pass slip stitch over (psso), then knit 2 together; a two-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'skp',
    definition: 'slip, knit, pass stitch over; a single-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'sl',
    definition: 'slip',
    link: ''
},
{
    category: 'S',
    term: 'sl st',
    definition: 'slip stitch(es)',
    link: ''
},
{
    category: 'S',
    term: 'sl1k',
    definition: 'slip 1 knitwise',
    link: ''
},
{
    category: 'S',
    term: 'sl1p',
    definition: 'slip 1 purlwise',
    link: ''
},
{
    category: 'S',
    term: 'sl1, k1, ppso',
    definition: 'slip one, knit one, pass slipped stitch over; a single-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'ssk',
    definition: 'slip, slip, knit these 2 stitches together; a left-slanting, single-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'ssp',
    definition: 'slip, slip, purl; one-stitch decrease; also known as p2tog tbl',
    link: ''
},
{
    category: 'S',
    term: 'sssk',
    definition: 'slip, slip, slip, knit these 3 stitches together; a left-slanting, two-stitch decrease',
    link: ''
},
{
    category: 'S',
    term: 'st(s)',
    definition: 'stitch(es)',
    link: ''
},
{
    category: 'S',
    term: 'St st',
    definition: 'stockinette stitch, stocking stitch',
    link: ''
},
{
    category: 'T',
    term: 'T',
    definition: '',
    link: ''
},
{
    category: 'T',
    term: 'tbl',
    definition: 'through back loop',
    link: ''
},
{
    category: 'T',
    term: 'tog',
    definition: 'together',
    link: ''
},
{
    category: 'W',
    term: 'W',
    definition: '',
    link: ''
},
{
    category: 'W',
    term: 'WS',
    definition: 'wrong side',
    link: ''
},
{
    category: 'W',
    term: 'wyib',
    definition: 'with yarn in back',
    link: ''
},
{
category: 'W',
term: 'wyif',
definition: 'with yarn in front',
link: ''
},
{
category: 'Y',
term: 'Y',
definition: '',
link: ''
},
{
category: 'Y',
term: 'yd(s)',
definition: 'yard(s)',
link: ''
},
{
category: 'Y',
term: 'yf or yfwd',
definition: 'yarn forward',
link: ''
},
{
category: 'Y',
term: 'yo',
definition: 'yarn over',
link: ''
},
{
category: 'Y',
term: 'yrn',
definition: 'yarn around needle',
link: ''
},
{
category: 'Y',
term: 'yon',
definition: 'yarn over needle',
link: ''
}








*/






    ngOnInit() {}
}
