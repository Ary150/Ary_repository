/*
** ETNA PROJECT, 2022
** PROJECT NAME
** File description
** 		init_boss.c
*/

#include "../include/Boss.h"
#include "../include/rpg.h"
#include "../include/my.h"

Boss_t **init_Boss(void)
{
    Boss_t **boss;
    int i;

    i = 0;
    boss = malloc(sizeof(boss) * (8));
    if (!boss)
        return (NULL);
    while (i < 7) {
        boss[i] = malloc(sizeof(Boss_t));
        if (!boss[i])
            return (NULL);
        boss[i]->name = my_strdup(Boss_name[i]);
        boss[i]->hp = Boss_hp[i];
        boss[i]->mp = Boss_mp[i];
        boss[i]->str = Boss_str[i];
        boss[i]->inte = Boss_inte[i];
        boss[i]->def = Boss_def[i];
        boss[i]->res = Boss_res[i];
        boss[i]->spd = Boss_spd[i];
        boss[i]->luck = Boss_luck[i];
        i = i + 1;
    }
    boss[i] = NULL;
    return (boss);
}
