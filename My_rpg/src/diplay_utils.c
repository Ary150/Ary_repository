/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		display_utils.c
*/

#include "../include/rpg.h"
#include "../include/my.h"
#include "../include/Enemy.h"


// f) d'affichage des stats de l'enemy
void display_stats_enemy(Enemy_t *enemy_arr)
{
    my_putstr(enemy_arr->name);
    my_putnbr(enemy_arr->hp);
    my_putnbr(enemy_arr->str);
    my_putnbr(enemy_arr->def);
}

// f) d'affichage des stats du player
void display_stats_player(Player_t *player_arr)
{
    // hp /sur hp_max 
    my_putstr(player_arr->name);
    my_putnbr(player_arr->hp);
    my_putnbr(player_arr->hp_max);
    my_putnbr(player_arr->str);
    my_putnbr(player_arr->def);
}

// f) d'affichage des stats du boss
void display_stats_boss(Boss_t *boss_arr)
{
    my_putstr(boss_arr->name);
    my_putnbr(boss_arr->hp);
    my_putnbr(boss_arr->hp);
    my_putnbr(boss_arr->hp);
}

