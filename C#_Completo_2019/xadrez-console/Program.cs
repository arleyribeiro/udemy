﻿using System;
using tabuleiro;

namespace xadrez_console
{
    class Program
    {
        static void Main(string[] args)
        {
            Posicao p = new Posicao(3, 4);
            Console.WriteLine(p);

            Tabuleiro tab = new Tabuleiro(8,8);
        }
    }
}
