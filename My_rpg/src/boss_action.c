/*
** ETNA PROJECT, 2022
** MY_RPG
** File description
** 		boss_action.c
*/

#include "../include/rpg.h"
#include "../include/Players.h"
#include "../include/Enemy.h"
#include "../include/my.h"
#include <stdio.h>

// f) qui initialise un nouveau boss
Boss_t *new_boss(Boss_t *boss_arr)
{
    Boss_t *new_boss;

    new_boss = malloc(sizeof(new_boss));
    new_boss->name = my_strdup(boss_arr->name);
    new_boss->hp = boss_arr->hp;
    new_boss->str = boss_arr->str;
    new_boss->mp = boss_arr->mp;
    new_boss->inte = boss_arr->inte;
    new_boss->def = boss_arr->def;
    new_boss->res = boss_arr->res;
    new_boss->spd = boss_arr->spd;
    new_boss->luck = boss_arr->luck;
            
    return (new_boss);
}

//f) attaque qui soustrait les str p_a des hp de enem_a
void attack_boss(Boss_t **boss_a, Player_t **player_a)
{
        (*player_a)->hp = (*player_a)->hp - (*boss_a)->str;
}


/*
int main()
{
    Player_t *new_player1;
    Enemy_t *new_enemy1;

    Player_t **playerteste =  init_player();
    Enemy_t **enemyteste =  init_enemies();

    new_player1 = new_player(playerteste[0]);
    new_enemy1= new_enemy(enemyteste[0]);
    my_putnbr(new_enemy1->hp);
    my_putchar('\n');
    attack_player(&new_player1, &new_enemy1);
    my_putnbr(new_enemy1->hp);
    my_putchar('\n');
    my_putnbr(new_player1->hp_max);
    my_putnbr(new_player1->hp);
    heal_player(&new_player1);
    my_putnbr(new_player1->hp);
}
*/